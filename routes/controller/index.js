const express = require("express");
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require("../usercontrollers");

router.get("/", getUsers);
router.post("/", addUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;