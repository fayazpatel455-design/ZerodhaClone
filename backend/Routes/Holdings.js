const router = require("express").Router();
const {getHoldings }=require("../Controllers/Holdings");

router.get("/",getHoldings );
module.exports = router;
