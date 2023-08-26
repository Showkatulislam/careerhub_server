const express = require('express');
const cors = require('cors');
const router = require('./src/block/block.route');

//#region initialize app
const app=express()
//#region setup middleware
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.json("Welcome to you our sit")
})

app.use('/api',router)

module.exports =app