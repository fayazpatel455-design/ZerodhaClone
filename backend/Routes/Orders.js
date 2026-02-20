const router = require("express").Router();
const {getOrders,createOrder }=require("../Controllers/Orders");

router.get("/",getOrders );
router.post("/", createOrder); 
module.exports = router;
