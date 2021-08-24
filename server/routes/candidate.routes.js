var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/candidate.controller");

router.post("/login", controller.login); // login

router.post("/register", controller.register); // register

// router.post("/update_profile_user", controller.update_profile_user); // update_profile_user

module.exports = router;
