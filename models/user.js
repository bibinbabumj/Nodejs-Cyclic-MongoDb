const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const UserSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
})

module.exports=mongosse.model('User',UserSchema)