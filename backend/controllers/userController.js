import sendMail from "../middleware/sendMail.js";
import {Users} from "../models/user.js";
import jwt from "jsonwebtoken";

export  const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await Users.findOne({ email });

    if (!user) {
      user = await Users.create({
        email,
      });
    }

    const otp = Math.floor(Math.random() * 1000000);


    const verifyToken = jwt.sign({ user, otp }, process.env.Activation_sec, {
      expiresIn: "5m",
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