var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/manager.controller");

router.post("/login", controller.login); // login

// router.post("/register", controller.register);

module.exports = router;
