const express = require("express");
const router = express.Router();

// Import functions from usercontrollers.js
const { getUsers, addUser, updateUser, deleteUser } = require("../usercontrollers");

// روت‌ها
router.get("/", getUsers);
router.post("/", addUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;