const { OrderModel } = require("../Models/OrderModel");
module.exports.getOrders=async(req,res)=>{
   let allOrders =await OrderModel.find({});
  res.send(allOrders);
}
module.exports.createOrder = async (req, res) => {
  try {
    const newOrder = new OrderModel(req.body);
    await newOrder.save();
    res.status(201).send({ success: true, message: "Order placed!" });
  } catch (err) {
    res.status(500).send({ success: false, message: "Order failed" });
  }
};