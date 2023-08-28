const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;


const uri=`mongodb+srv://crud:crud@cluster0.0fy1kbx.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  const db = client.db('careerhub');
  const Block = db.collection("blocks");


  app.get("/block", async (req, res) => {
      try {
          const block=await Block.find({}).toArray()
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
          const newBlock= await Block.insertOne(block)
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
          const result=await Block.deleteOne({ "_id" :new ObjectId(id) })
          res.status(200).json({
              status: "success",
              message: "block delete successfully!",
              res:result
            });
      } catch (error) {
          res.status(400).json({
              status: "fail",
              message: "Couldn't create the block",
              error: error.message,
            });
      }
  })
})().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello Emma John!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
/* 
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const Block = require("./Block");
const { MongoClient } = require("mongodb");
//#region initialize app
const app = express();
//#region setup middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

const uri=`mongodb+srv://crud:crud@cluster0.0fy1kbx.mongodb.net/?retryWrites=true&w=majority`


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("careerhub").command({ ping: 1 });
      
    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);

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
 */
