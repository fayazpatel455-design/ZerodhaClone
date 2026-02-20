const mongoose =require("mongoose");

const PositionSchema=new mongoose.Schema({
    product: String,
    name:String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})
const PostionModel=mongoose.model("Postion",PositionSchema);

module.exports=PostionModel;