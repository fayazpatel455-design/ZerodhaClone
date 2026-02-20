const PostionModel = require("../Models/PostionModel");
module.exports.getPosition=async(req,res)=>{
  let allPosition =await PostionModel.find({});
  res.send(allPosition);
}