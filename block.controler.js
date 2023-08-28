
const { getBlockService, addBlockService,deleteBlockService  } = require("./block.service")


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
        const newBlock= await addBlockService(block)
        console.log(id);
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
exports.deleteBlock=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id);
        const result=await deleteBlockService(id)
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
}