const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const employerSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  employer_name: { type: String },
  phone_number: { type: String, unique: true, sparse: true, index: true },
  owner_name: { type: String },
  image_url: { type: String },
  address: { type: String },
  information: { type: String },
});

module.exports = mongoose.model("Employers", employerSchema);
