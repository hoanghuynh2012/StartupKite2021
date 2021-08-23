const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const jobSchema = new Schema({
  id: { type: ObjectId },
  title: { type: String },
  employer_id: { type: ObjectId },
  benefit: { type: String },
  experience_reqirements: { type: String },
  gender_requirements: { type: String },
  level_requirements: { type: String },
  job_requirements: { type: String },
  job_descriptions: { type: String },
  work_place: { type: String },
  wage: { type: String },
  create_at: { type: Date, default: Date.now },
  role: { type: Number },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("Jobs", jobSchema);
