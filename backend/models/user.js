import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    
   fullName: {type :String},
   email: { type: String, unique: true },
   password:{type: String},
  
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.model("User", schema);
