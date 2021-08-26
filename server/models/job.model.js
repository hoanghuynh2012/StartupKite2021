const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const employer = require("../models/employer.model");

const jobSchema = new Schema({
  id: { type: ObjectId },
  title: { type: String },
  employer_id: { type: ObjectId, ref: "Employers" },
  benefit: { type: String },
  experience_requirements: { type: String },
  gender_requirements: { type: String },
  level_requirements: { type: String },
  job_requirements: { type: String },
  job_descriptions: { type: String },
  work_place: { type: String },
  wage: { type: String },
  create_at: { type: Date },
  update_at: { type: Date },
  role: { type: Number },
  expiry_date: { type: Date },
  status: { type: Boolean, default: true },
});

// có 16 thuộc tính

module.exports = mongoose.model("Jobs", jobSchema);
