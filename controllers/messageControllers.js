const expressAsyncHandler = require("express-async-handler");
const Message = require("../modal/messagemodal");
const User = require("../modal/usermodal");
const chat = require("../modal/chatmodal");

const sendMessage = expressAsyncHandler(async (req, res) => {
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    console.log("invalid data passed into req");
    return res.sendStatus(400);
  }
  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
        path:"chat.users",
        select:"name pic email",
    });
    await chat.findByIdAndUpdate(req.body.chatId,{
        latestMessage:message,
    })
res.json(message);
} catch (error) {
    res.status(400);
    throw new Error(error.message);
}
});
const allMessages=expressAsyncHandler(async(req,res)=>{
    try{
 const messages= await Message.find({chat:req.params.chatId}).populate(
    "sender",
    "name pic email"
 ).populate("chat");
 res.json(messages);
    }catch(error){
    res.status(400)
    throw new Error(error.message)
    }
})

module.exports = { sendMessage,allMessages };
