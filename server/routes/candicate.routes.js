var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/candicate.controller");

router.post("/login", controller.login); // login

router.post("/register", controller.register); // register

module.exports = router;
