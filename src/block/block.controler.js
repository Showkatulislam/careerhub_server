
const { getBlockService, addBlockService } = require("./block.service")


exports.getBlock=async(req,res)=>{
    try {
        const block=await getBlockService()
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
}
exports.addBlock=async(req,res)=>{
    try {
        const block=req.body
        const newBlock=await addBlockService(block)
        res.status(200).json({
            status: "success",
            message: "Brand is created successfully!",
            block: newBlock,
          });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create the brand",
            error: error.message,
          });
    }
}