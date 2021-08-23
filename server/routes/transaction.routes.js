var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/transaction.controller");

router.post("/newTransaction", controller.addNewTransaction); 
router.post("/getTransaction", controller.getTransactions); 


module.exports = router;
