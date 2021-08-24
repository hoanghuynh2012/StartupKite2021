var job = require("../models/job.model");
const jwt = require("jsonwebtoken");
// function check data null
const dataIsValid = (data) => {
  for (let i in data) {
    if (typeof data[i] === "string") {
      if (data[i].trim().length === 0) return false;
    }
  }
  return true;
};
//
module.exports = {
  // get all jobs
  getAll: async (req, res, next) => {
    try {
      const results = await job.find();
      res.send(results);
    } catch (error) {
      res.send(error.message);
    }
  },

  // all new job
  addNewJob: async (req, res, next) => {
    try {
      if (dataIsValid) {
        const model = new job(req.body);
        model["create_at"] = Date.now();
        model["date_update"] = Date.now();
        model.save((error) => {
          if (error) {
            res.send({ success: false, message: error });
          } else {
            res.send({ success: true, message: "Insert success!" });
          }
        });
      } else res.send({ success: false, message: "Model not found" });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  // edit job (sửa job bởi doanh nghiệp);
  editJob: async (req, res, next) => {
    try {
      if (dataIsValid(req.body)) {
        const {
          id,
          title,
          employer_id,
          benefit,
          experience_requirements,
          gender_requirements,
          level_requirements,
          job_requirements,
          job_descriptions,
          work_place,
          wage,
          role,
        } = req.body;
        const _job = await job.findOne({ _id: id });
        _job.title = title;
        _job.employer_id = employer_id;
        _job_requirements = job_requirements;
        _job.benefit = benefit;
        _job.experience_requirements = experience_requirements;
        _job.gender_requirements = gender_requirements;
        _job.level_requirements = level_requirements;
        _job.job_descriptions = job_descriptions;
        _job.work_place = work_place;
        _job.wage = wage;
        _job.role = role;
        _job.work_place = work_place;
        _job.date_update = Date.now();

        _job.save((error) => {
          if (error) res.json({ success: false, message: error.message });
          else res.json({ success: true, message: "Update success" });
        });
      } else res.send({ success: false, message: "Model not found" });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  // delete job ( khi job vi phạm chính sách)
  deleteJob: async (req, res, next) => {
    try {
      let id = req.body.id;
      if (id) {
        job.deleteOne({ _id: id }, function (err) {
          if (err) {
            res.send({ success: false, message: "Delete fail!" });
          } else {
            res.send({ success: true, message: "Delete success" });
          }
        });
      } else {
        res.send({ success: false, message: "Delete fail (null Id)" });
      }
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },
};
// json test API job
//   {
// "title": "",
// "employer_id":"",
// "benefit":"",
// "experience_requirements":"" ,
// "gender_requirements":"",
// "level_requirements": "",
// "job_requirements":"",
// "job_descriptions":"" ,
// "work_place":"" ,
// "wage":"" ,
// "role": ,
// "status": false
// }
