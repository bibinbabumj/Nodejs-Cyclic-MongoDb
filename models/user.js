const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    my_self:{
        type:String,
        required:true
    },
    profile_summary:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_mobile:{
        type:String,
        required:true
    },

    profile_url:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    github_url:{
        type:String,
        required:true
    },

    gitlab_url:{
        type:String,
        required:true
    },
    linkedin_url:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('User',UserSchema)

