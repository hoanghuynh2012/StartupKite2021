const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const candidateSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  phone_number: { type: String, unique: true, sparse: true, index: true },
  full_name: { type: String },
  avatar: { type: String },
  date_of_birth: { type: Date },
  gender: { type: String },
  level: { type: String },
  address: { type: String },
  role: { type: Number },
});
// có 11 thuộc tính

module.exports = mongoose.model("Candidates", candidateSchema);
