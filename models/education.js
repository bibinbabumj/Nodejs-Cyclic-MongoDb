const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const EducationSchema= new Schema({
    user_id:{
        type:String,
        required:true
    },

    course:{
        type:String,
        required:true
    }
    ,

    course_year:{
        type:String,
        required:true
    }
    ,

    course_university_name:{
        type:String,
        required:true
    }
    ,

    course_name:{
        type:String,
        required:true
    },

    course_location:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('education',EducationSchema)

