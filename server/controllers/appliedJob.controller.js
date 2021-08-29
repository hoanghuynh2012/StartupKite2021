var appliedJob = require("../models/appliedJob.model");
var candidate = require("../models/candidate.model");


module.exports = {
    // add new
    addNewAppliedJob: async (req, res, next) => {
        const model = new appliedJob(req.body);
        model.save((error) => {
          if (error) res.json(error.message);
          else res.json({ msg: "Insert success" });
        });
    },
    
    // get by id candidate
    getAppliedJobByCandidate: async(req, res, next) =>{
        try{
            const candidate_id = req.body.candidate_id;
            const results = await appliedJob.find({ candidate_id: candidate_id});
            res.send(results);
        }catch(error){
            res.json(error.message);
        }
    }


}