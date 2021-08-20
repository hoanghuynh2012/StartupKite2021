const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  phone_number: { type: String, default: "" },
  avatar: { type: String, default: "" },
  date_of_birth: { type: Date, default: null },
  gender: { type: String, default: "" },
  level:{ type: String, default: ""},
  address: { type: String, default: "" },
  role:{ type: Number}
});

module.exports = mongoose.model("Users", userSchema);
