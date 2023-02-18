const express = require('express');
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const route = express.Router();

route.get("/", auth, userController.getAllUsers);
route.post("/", userController.register);

module.exports = route;