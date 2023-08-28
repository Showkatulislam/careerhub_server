const { default: mongoose } = require("mongoose");
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const Block = require("./Block");
//#region initialize app
const app = express();
//#region setup middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASELOCAL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.json("Welcome to you our sit");
});
app.get("/block", async (req, res) => {
    try {
        const block=await Block.find({})
        res.status(200).json({
            block:block,
            status:"success"
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'data not found'
        })
    }
});

app.post('/block',async(req,res)=>{
    try {
        const block=req.body
        const newBlock= await Block.create(block)
        res.status(200).json({
            status: "success",
            message: "block is created successfully!",
            block: newBlock,
          });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create the brand",
            error: error.message,
          });
    }
})


app.delete("/block/:id",async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id);
        const result=await Block.deleteOne({_id:id})
        res.status(200).json({
            status: "success",
            message: "Brand delete successfully!",
            res:result
          });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create the brand",
            error: error.message,
          });
    }
})

app.listen(port, () => {
  console.log("SERVER IS RUNNING AT PORT 5000");
});
