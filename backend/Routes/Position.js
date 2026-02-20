const router = require("express").Router();
const {getPosition }=require("../Controllers/Position");
router.get("/",getPosition );
module.exports = router;
