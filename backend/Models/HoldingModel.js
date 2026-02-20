// const Schema =require("mongoose");
const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingModel=mongoose.model("Holding",HoldingSchema);

module.exports=HoldingModel;
