const express = require('express');
const cors = require('cors')

//#region initialize app
const app=express()
//#region setup middleware
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.json("Welcome to you our sit")
})

module.exports =app