const express = require("express");
const { getBlock, addBlock } = require("./block.controler");
const router = express.Router();

router.route("/")
      .get(getBlock)
      .post(addBlock);

module.exports=router


