var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/employer.controller");

router.post("/login", controller.login); // login

router.post("/register", controller.register); // register

// router.post("/update_profile_employer", controller.update_profile_employer); // update_profile_employer

module.exports = router;
