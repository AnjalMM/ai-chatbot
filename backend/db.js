const mongoose = require('mongoose')

const mongourl = "mongodb+srv://mmanjal120:2s3lBQnWa8rrVBYc@cluster0.j0w2sjt.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0";

 mongoose.connect(mongourl,{useNewUrlparser:true,useUnifiedTopology:true});

 const db = mongoose.connection;
db.on('connected',()=>{
  console.log('mongodb connection succesfully');
  
})

db.on('error',()=>{
    console.log('mongo connection have an error');
    
})

db.on('close',()=>{
    console.log('mongodb connection is closed');
    
})

module.exports = mongoose;