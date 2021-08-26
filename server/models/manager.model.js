const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const managerSchema = new Schema({
  id: { type: ObjectId },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  phone_number: { type: String },
  role: { type: Number },
});
// có 6 thuộc tính

module.exports = mongoose.model("Managers", managerSchema);
