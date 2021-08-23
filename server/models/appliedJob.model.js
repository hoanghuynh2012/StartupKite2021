const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const appliedJobSchema = new Schema({
  id: { type: ObjectId },
  candidate_id: { type: ObjectId },
  job_id: { type: ObjectId },
  apply_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("AppliedJobs", appliedJobSchema);
