var job = require("../models/job.model");
const jwt = require("jsonwebtoken");

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
      // check data not null
      if (
        req.body.title.length != 0 &&
        req.body.employer_id.length != 0 &&
        req.body.benefit.length != 0 &&
        req.body.experience_requirements.length != 0 &&
        req.body.gender_requirements.length != 0 &&
        req.body.level_requirements.length != 0 &&
        req.body.job_requirements.length != 0 &&
        req.body.job_descriptions.length != 0 &&
        req.body.work_place.length != 0 &&
        req.body.wage.length != 0 &&
        req.body.role.length != 0 &&
        req.body.status.length != 0
      ) {
        const myObj = {
          title: req.body.title,
          employer_id: req.body.employer_id,
          benefit: req.body.benefit,
          experience_requirements: req.body.experience_requirements,
          gender_requirements: req.body.gender_requirements,
          level_requirements: req.body.level_requirements,
          job_requirements: req.body.job_requirements,
          job_descriptions: req.body.job_descriptions,
          work_place: req.body.work_place,
          wage: req.body.wage,
          role: req.body.role,
          status: req.body.status,
          create_at: Date.now(),
          date_update: Date.now(),
        };
        const model = new job(myObj);

        model.save((error) => {
          if (error) {
            res.send({ success: false, message: error });
          } else {
            res.send({ success: true, message: "Insert success!" });
          }
        });
      } else {
        res.send({ success: false, message: "Model found" });
      }
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  },

  // edit job (sửa job bởi doanh nghiệp);
  editJob: async (req, res, next) => {
    try {
      let id = req.body.id;
      job.findOne({ _id: id }, (err, data) => {
        if (err) {
          res.send({ success: false, message: err });
        } else {
          // check data truyền lên xem có rỗng không
          if (
            req.body.title.length != 0 &&
            req.body.employer_id.length != 0 &&
            req.body.benefit.length != 0 &&
            req.body.experience_requirements.length != 0 &&
            req.body.gender_requirements.length != 0 &&
            req.body.level_requirements.length != 0 &&
            req.body.job_requirements.length != 0 &&
            req.body.job_descriptions.length != 0 &&
            req.body.work_place.length != 0 &&
            req.body.wage.length != 0 &&
            req.body.role.length != 0 &&
            req.body.status.length != 0
          ) {
            data.title = req.body.title;
            data.employer_id = req.body.employer_id;
            data.benefit = req.body.benefit;
            data.experience_requirements = req.body.experience_requirements;
            data.gender_requirements = req.body.gender_requirements;
            data.level_requirements = req.body.level_requirements;
            data.job_requirements = req.body.job_requirements;
            data.job_descriptions = req.body.job_descriptions;
            data.work_place = req.body.work_place;
            data.wage = req.body.wage;
            data.role = req.body.role;
            data.status = req.body.status;
            data.date_updated = Date.now();
            data.save((err) => {
              if (err) {
                res.send({ success: false, message: "Update error!" });
              } else {
                res.send({ success: true, message: "Update success" });
              }
            });
          } else {
            res.send({ success: false, message: "Date error!" });
          }
        }
      });
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
//   "title": "",
//   "employer_id":"",
//   "benefit":"",
//   "experience_requirements":"" ,
//   "gender_requirements":"",
//   "level_requirements": "",
//   "job_requirements":"",
//   "job_descriptions":"" ,
//   "work_place":"" ,
//   "wage":"" ,
//   "role": ,
//   "status": false
// }
