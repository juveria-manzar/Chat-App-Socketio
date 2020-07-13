const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const chatSchema=new Schema(
    {
        message:{
            type:String
        },
        sender:{
            type:String
        }
    },
    {
        timestamp:true
    }
);

let Chat=mongoose.model('ChatHistory',chatSchema)
module.exports=Chat;