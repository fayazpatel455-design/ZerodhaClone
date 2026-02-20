// const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
});

const OrderModel=mongoose.model("Order",OrderSchema);

module.exports={OrderModel}
