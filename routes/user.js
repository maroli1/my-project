const express = require ("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller");
router.get("/",usercontroller.getuser);
router.post("/",usercontroller.createuser);
router.put("/",usercontroller.updateuser);
router.delete("/",usercontroller.deleteuser);

module.exports = router