const mongoose=require('mongoose');
mongoose.Promise=require('bluebird')

const  url  =  "mongodb://localhost:27017/chatapp";
const connect=mongoose.connect(url,{useNewParser:true})

module.exports=connect