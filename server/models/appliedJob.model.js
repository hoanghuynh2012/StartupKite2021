const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const appliedJobSchema = new Schema({
  id: { type: ObjectId },
  user_id: { type: ObjectId },
  job_id: { type: ObjectId },
  apply_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AppliedJobs", appliedJobSchema);
