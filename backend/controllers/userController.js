import sendMail from "../middleware/sendMail.js";
import {Users} from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { S3Client } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { extname } from "path";
import { Upload } from "@aws-sdk/lib-storage";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});



// Multer storage (memory for direct S3 upload)
export const upload = multer({ storage: multer.memoryStorage() });



export const signupUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {

     // ✅ Check if the user already exists
     const existingUser = await Users.findOne({ email });
     if (existingUser) {
       return res.status(400).json({ message: "Email already in use" });
     }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({ fullName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
};



export  const loginUser = async (req, res) => {
  try {
    const { email,password} = req.body;

    let user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const otp = Math.floor(Math.random() * 1000000);


    const verifyToken = jwt.sign({ user, otp }, process.env.Activation_sec, {
      expiresIn: "1h",
    });

    await sendMail(email, "ChatBot", otp);

    res.json({
      message: "Otp send to your mail",
      verifyToken,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { otp, verifyToken } = req.body;

    const verify = jwt.verify(verifyToken, process.env.Activation_sec);

    if (!verify)
      return res.status(400).json({
        message: "Otp Expired",
      });

    if (verify.otp !== otp)
      return res.status(400).json({
        message: "Wrong otp",
      });

    const token = jwt.sign({ _id: verify.user._id }, process.env.Jwt_sec, {
      expiresIn: "5d",
    });

    res.json({
      message: "Logged in successfully",
      user: verify.user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// export const myProfile = async (req, res) => {
//   try {
//     const user = await Users.findById(req.user._id);

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };


export const getProfile = async (req, res) => {
  const user = await Users.findById(req.user.id).select("-password"); // Remove password from response
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};


export const uploadPic = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileName = `profiles/${crypto.randomBytes(16).toString("hex")}${extname(req.file.originalname)}`;

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
      ACL: "public-read",
    };

    await new Upload({ client: s3, params: uploadParams }).done();

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    res.json({ url: fileUrl });
  } catch (error) {
    console.error("S3 Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
};