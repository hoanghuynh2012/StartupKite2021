var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/candidate.controller");

router.post("/login", controller.login); // login

router.post("/register", controller.register); // register

router.post("/update-profile-candidate", controller.update_profile_candidate); // update_profile_candidate

module.exports = router;
