const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const managerSchema = new Schema({
  id: { type: ObjectId },
  creator: { type: ObjectId },
  receiver: { type: ObjectI },
  type: { type: Number },
  amount: { type: Number },
  create_at: { type: Date },
});

module.exports = mongoose.model("Managers", managerSchema);
