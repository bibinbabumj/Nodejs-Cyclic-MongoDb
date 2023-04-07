const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const SkillsSchema= new Schema({
    user_id:{
        type:String,
        required:true
    },

    skill_name:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('Skills',SkillsSchema)

