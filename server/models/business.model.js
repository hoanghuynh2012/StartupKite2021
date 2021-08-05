const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const businessSchema = new Schema({
  id: { type: ObjectId },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  phone_number: { type: String, default: "" },
  image_url: { type: String, default: "" },
  address: { type: String, default: "" },
});

module.exports = mongoose.model("Businesses", businessSchema);
