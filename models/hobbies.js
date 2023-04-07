const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const HobbiesSchema= new Schema({
    user_id:{
        type:String,
        required:true
    },

    hobbies_name:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('Hobbies',HobbiesSchema)

