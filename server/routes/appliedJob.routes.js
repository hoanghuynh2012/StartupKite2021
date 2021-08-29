var express = require("express");
var router = express.Router();


var controller = require("../controllers/appliedJob.controller");

router.post("/newAppliedJob", controller.addNewAppliedJob);//add new AppliedJob

router.post("/getAppliedJobByCandidate", controller.getAppliedJobByCandidate);//get By Id Candidate

module.exports = router;