const express = require ("express");
const dotenv= require("dotenv");
const connectDB = require("./modal/config/db");
const colors = require("colors");
const userRoutes=require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes=require("./routes/messageRoutes")
const {notFound,errorHandler}= require("./middleware/errormiddleware")

const app=express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/chat",chatRoutes);
app.use("/api/user",userRoutes);
app.use("/api/message",messageRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT= process.env.PORT || 5000
app.listen(PORT,console.log(`server started on port ${PORT}`.bgBlue.bold));