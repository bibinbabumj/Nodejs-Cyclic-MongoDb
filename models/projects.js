const mongosse=require("mongoose")
const Schema= mongosse.Schema;

const ProjectsSchema= new Schema({
    user_id:{
        type:String,
        required:true
    },

    project_name:{
        type:String,
        required:true
    }
    ,

    project_company_name:{
        type:String,
        required:true
    }
    ,

    project_duration:{
        type:String,
        required:true
    }
    ,

    project_details:{
        type:String,
        required:true
    },

    project_role:{
        type:String,
        required:true
    }
})

module.exports=mongosse.model('Projects',ProjectsSchema)

