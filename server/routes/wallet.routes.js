var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/wallet.controller");

router.post("/update-wallet", controller.updateMoney); // login

module.exports = router;