const Block = require("./block.model")

exports.getBlockService=async()=>{
    const block=await Block.find({});
    return block;
}

exports.addBlockService=async(block)=>{
    const newBlock=await Block.create(block)
    return newBlock
}
exports.deleteBlockService=async(id)=>{
    const newBlock=await Block.deleteOne({_id:id})
    return newBlock
}