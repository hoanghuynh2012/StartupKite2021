var express = require("express");
var router = express.Router();
var auth = require("../commons/auth");

var controller = require("../controllers/job.controller");

router.get("/getAllJob", controller.getAll); // get all

router.post("/addNewJob", controller.addNewJob); // add new job

router.post("/editJob", controller.editJob); // edit job

router.post("/deleteJob", controller.deleteJob); // delete job

module.exports = router;
