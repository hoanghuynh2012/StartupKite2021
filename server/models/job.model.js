const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const jobSchema = new Schema({
  id: { type: ObjectId },
  title: { type: String },
  employer_id: { type: ObjectId },
  benefit: { type: String },
  experience: { type: String },
  gender_requirement: { type: String },
  create_at: { type: Date, default: Date.now },
  level_requirement: { type: String },
  job_requirement: { type: String },
  job_description: { type: String },
  work_place: { type: String },
  wage: { type: String },
});

module.exports = mongoose.model("Jobs", jobSchema);
