const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const employerSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  employer_name: { type: String, default: "" },
  phone_number: { type: String, default: "" },
  owner_name: { type: String, default: "" },
  image_url: { type: String, default: "" },
  address: { type: String, default: "" },
  information: { type: String, default: "" },
});

module.exports = mongoose.model("Employers", employerSchema);
