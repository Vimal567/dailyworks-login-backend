const express = require('express');
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const route = express.Router();

route.post("/", userController.register);
route.get("/", auth, userController.getAllUsers);

module.exports = route;