const express = require('express')
require('mongoose')
require('./db')

const app = express();

app.get('/',(req,res)=>{
    res.send("server on Running")
})


const port = process.env.PORT || 5000 ;

app.listen(port,()=>{console.log(`server is running succesfully on ${port}`)});
