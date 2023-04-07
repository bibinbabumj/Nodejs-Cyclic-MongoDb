const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const ExperienceSchema= new Schema({
    user_id:{
        type:String,
        required:true
    },

    experience_work_role:{
        type:String,
        required:true
    }
    ,

    experience_company_name:{
        type:String,
        required:true
    }
    ,

    experience_year:{
        type:String,
        required:true
    }
    ,

    experience_location:{
        type:String,
        required:true
    },

    experience_responsibility:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('Experience',ExperienceSchema)

