const mongoose = require("mongoose")
const Schema = mongoose.Schema;
let Projects = null;
if (mongoose.models.Projects) {
    Projects = mongoose.model('Projects');
} else {
    const ProjectsSchema= new Schema({
        user_id:{
            type:String,
            required:true
        },
    
        project_name:{
            type:String,
            required:true
        },
    
        project_company_name:{
            type:String,
            required:true
        },
    
        project_duration:{
            type:String,
            required:true
        },
    
        project_details:{
            type:String,
            required:true
        },
    
        project_role:{
            type:String,
            required:true
        }
    })
    Projects = mongoose.model('Projects',ProjectsSchema)
}
module.exports = Projects;