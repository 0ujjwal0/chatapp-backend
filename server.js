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

app.use('/api/user',userRoutes)
const PORT= process.env.PORT || 5000
app.listen(PORT,console.log(`server started on port ${PORT}`.bgBlue.bold));