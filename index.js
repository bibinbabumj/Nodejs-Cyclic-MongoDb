const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

/////////
const User = require("./models/user");
const Skill = require("./models/skills");
const Hobbies = require("./models/hobbies");
const Education = require("./models/education");
const Project = require("./models/projects");
const Experience = require("./models/experience");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






const connectDb= async()=>{
    try {
        const conn=await mongosse.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error)
        process.exit(1)
    } 
}

app.get("/user",async(req,res)=>{
    // const user=await User.find()  
    // if(user){
    //    res.json(user)
    // }else{
    //    res.send("something error")
    // }
    res.send("user")
})

app.get("/skills",async(req,res)=>{
    const skills=await Skill.find()  
    if(skills){
       res.json(skills)
    }else{
       res.send("something error")
    }
})
app.get("/hobbies",async(req,res)=>{
    const hobbies=await Hobbies.find()  
    if(hobbies){
       res.json(hobbies)
    }else{
       res.send("something error")
    }
})

app.get("/education",async(req,res)=>{
    const education=await Education.find()  
    if(education){
       res.json(education)
    }else{
       res.send("something error")
    }
})

app.get("/project",async(req,res)=>{
    const project=await Project.find()  
    if(project){
       res.json(project)
    }else{
       res.send("something error")
    }
})

app.get("/experience",async(req,res)=>{
    const experience=await Experience.find()  
    if(experience){
       res.json(experience)
    }else{
       res.send("something error")
    }
})


app.get("/",async(req,res)=>{
try {
    const user=await User.find()  
    const skills=await Skill.find() 
    const hobbies=await Hobbies.find()  
    const education=await Education.find()  
    const project=await Project.find()  
    const experience=await Experience.find() 
    const responseData = {
        user: user,
        skills: skills,
        hobbies: hobbies,
        education: education,
        project: project,
        experience: experience,
      };
      res.json(responseData);

} catch (error) {
    res.send("something error");
}

})


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("listen")
    })  
})

