import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    
   fullName: {type :String},
   email: { type: String, unique: true },
   password:{type: String},
   profilePicture: { type: String, default: "https://via.placeholder.com/150" }, // Default image
   role: { type: String, enum: ["user", "admin"], default: "user" }, // Role
   createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model("User", schema);
