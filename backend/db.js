const mongoose = require('mongoose')

const mongourl = process.env.db_url;

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