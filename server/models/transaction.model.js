const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const transactionSchema = new Schema({
  id: { type: ObjectId },
  creator: { type: ObjectId },
  receiver: { type: ObjectId },
  type: { type: Number },
  amount: { type: Number },
  create_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});
// có 7 thuộc tính

module.exports = mongoose.model("Transactions", transactionSchema);
