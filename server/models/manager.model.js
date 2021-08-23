const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const managerSchema = new Schema({
  id: { type: ObjectId },
  username: { type: String, unique: true },
  email: { type: String, unique: true, default: "" },
  password: { type: String },
  phone_number: { type: String, default: "" },
  role: { type: Number, default: 0 },
});

module.exports = mongoose.model("Managers", managerSchema);
