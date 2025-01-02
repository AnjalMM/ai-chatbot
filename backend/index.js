import express from "express";
import dotenv from "dotenv";
import connectDb from './db.js'
import bodyParser from "body-parser";


import userRouter from "./Routes/userRouter.js"

dotenv.config()
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))
app.use("/api/users",userRouter)

app.get('/',(req,res)=>{
    res.send("server on Running")
})


const port = 5000;

app.listen(port,()=>{
    console.log(`server is running succesfully on ${port}`)
    connectDb()
});