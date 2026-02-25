const router = require("express").Router();
const {profile}=require("../Controllers/Profile")

router.get("/", profile);
module.exports = router;