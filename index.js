require('dotenv').config()
const express = require("express");
const app = express();
const PORT=process.env.PORT||3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
     res.send("hello")        
})

app.get("/user",(req,res)=>{
    res.send("hello bibin")        
})




app.listen(PORT,()=>{
    console.log("listen")
})