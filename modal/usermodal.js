const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: {
    type: String,
    required: true,
    default: "https://icon-library.com/icon/anonymous-avatar-icon-25.html.html",
  },
},
{
timestamps:true
}
);
const User=mongoose.model("User",userSchema);
module.exports=User;
