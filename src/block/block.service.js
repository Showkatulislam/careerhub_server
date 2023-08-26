const Block = require("./Block.model")

exports.getBlockService=async()=>{
    const block=await Block.find({});
    return block;
}

exports.addBlockService=async(block)=>{
    const newBlock=await Block.create(block)
    return newBlock
}