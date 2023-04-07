require('dotenv').config()
const express = require("express");
const mongosse=require("mongoose")
const app = express();
const PORT=process.env.PORT||3000
mongosse.set("strictQuery",false);

//////
const User=require('./models/user')


const connectDb= async()=>{
    try {
        const conn=await mongosse.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error)
        process.exit(1)
    } 
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
     const user=await User.find()  
     
     if(user){
        res.json(user)
     }else{
        res.send("something error")
     }
})

app.get("/user",(req,res)=>{
    res.send("hello bibin")        
})


app.get("/profile", async(req,res)=>{
   try {
    await User.insertMany([
        {
            title:"fcvgyhujik",
            body:"dfghjk"
        },
        {
            title:"fcvgyhujik",
            body:"dfghjk"
        }
    ])

   } catch (error) {
    console.log(error)
   }       
})



connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("listen")
    })  
})



 const strObject={
        user_id:100,
        name:"bibin",
        profile_url: "fb",
        github_url: "fb",
        gitlab_url: "fb",
        linkedin_url: "fb", 
        skills: [
            {id:1,
            user_id:"100",
            skill_name:"Java"
            },
             {id:1,
            user_id:"100",
            skill_name:"Java"
            }
        ],
        hobbies: [
            {id:1,
            user_id:"100",
            hobbies_name:"Read"
            },
             {id:1,
            user_id:"100",
            hobbies_name:"Write"
            }
        ],
        education: [
            {id:1,
            user_id:"100",
            course:"Read",
            course_year:"100",
            course_university_name:"Read",
            course_name:"100",
            course_location:"Read"
            },
             {id:1,
            user_id:"100",
            course:"Read",
            course_year:"100",
            course_university_name:"Read",
            course_name:"100",
            course_location:"Read"
            }
        ],
        experience: [
            {id:1,
            user_id:"100",
            experience_work_role:"Read",
            experience_company_name:"100",
            experience_year:"Read",
            experience_location:"100",
            experience_responsibility:"Read"
            },
             {id:1,
           user_id:"100",
            experience_work_role:"Read",
            experience_company_name:"100",
            experience_year:"Read",
            experience_location:"100",
            experience_responsibility:"Read"
            }
        ],
        projects: [
            {id:1,
            user_id:"100",
            project_name:"Read",
            project_company_name:"100",
            project_duration:"Read",
            project_details:"100"
            },
             {id:1,
           user_id:"100",
            user_id:"100",
            project_name:"Read",
            project_company_name:"100",
            project_duration:"Read",
            project_details:"100"
            }
        ]
    }