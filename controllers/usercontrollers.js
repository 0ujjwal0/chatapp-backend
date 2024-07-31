const asyncHandler = require("express-async-handler");
const User = require("../modal/usermodal");
const generateToken= require('../modal/config/generateToken');
const { all } = require("../routes/userRoutes");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id),
    });
  }else{
    res.status(400);
    throw new Error("Failed to create the User");
  }
});
const authUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});
    if(user &&(await user.matchPassword(password))){
        res.json({
            _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id),
        })
    }else{
        res.status(401);
        throw new Error("invalid email or password");
    }
})

// /api/user?search=ujjwal

const allUsers=asyncHandler(async(req,res)=>{
  const keyword=req.query

  console.log(keyword);
})

module.exports={registerUser,authUser,allUsers};