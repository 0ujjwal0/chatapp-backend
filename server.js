const express = require ("express");
const dotenv= require("dotenv");
const {chats} = require( "./data");
const connectDB = require("./modal/config/db");
const colors = require("colors");

const app=express();
dotenv.config();
connectDB();
app.get('/',(req,res)=>{
  res.send("api is running");
});
app.get("/api/chat",(req,res)=>{
res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    
    const singlechat=chats.find((c)=>c._id===req.params.id);
    res.send(singlechat);
})
const PORT= process.env.PORT || 5000
app.listen(PORT,console.log(`server started on port ${PORT}`.bgBlue.bold));