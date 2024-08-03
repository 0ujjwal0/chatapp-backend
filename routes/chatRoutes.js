const express = require("express")
const {protect}=require("../middleware/authmiddleware")

const router =express.Router();

//router.route("/").post(protect,accessChat);
//router.route("/").get(protect,fetchChats);
//router.route("/group").post(protect,createGroupchat);
//router.route("/rename").put(protect,renamegroup)
//router.route("/groupremove").put(protect,removefromgroup)
//router.route("/groupadd").put(protect,addtogroup)


module.exports= router;