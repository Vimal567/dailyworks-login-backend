const express = require('express');
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const route = express.Router();

route.get("/", userController.getAllUsers);
route.post("/register", userController.register);
route.post("/login", auth, userController.login)

module.exports = route;