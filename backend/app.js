const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{

 const {name,email,password}=req.body;

res.json({
 message:"User Registered Successfully",
 user:{
 name,
 email
 }
 });

});

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});