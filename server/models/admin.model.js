const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const adminSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true },
  password: { type: String },
  phone_number: { type: String, default: "" },
  role: { type: Number },
});

module.exports = mongoose.model("Admins", adminSchema);
