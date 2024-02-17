const express = require("express");
const {addChat,findChats,findUserChats} = require("../Controllers/chatController");

const router = express.Router();

router.post("/", addChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChats);


module.exports = router;