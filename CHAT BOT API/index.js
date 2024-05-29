const express=require("express");
//install express using npm install express
const app=express()
const Data=require("./Data/data.json")
//install cors using npm i cors
const cors=require("cors");
app.use(cors());

app.post("/chat",(req,res)=>{


const question =req.query.question;

const filtereddata=Data.filter((data)=>{
if(question){

return data.question ==question;


}



})

res.json(filtereddata)

})

const port=process.env.port||2000;

app.listen(port,()=>console.log("server is running on"+ port));