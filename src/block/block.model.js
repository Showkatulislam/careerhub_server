const mongoose = require('mongoose');

const blockSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },description:{
        type:String,
        required:true,
        trim:true,
    }
},{
    timestamp:true
});
const Block = mongoose.model("Block", blockSchema);

module.exports=Block;