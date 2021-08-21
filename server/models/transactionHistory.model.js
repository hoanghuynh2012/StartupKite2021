const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const transactionHistorySchema = new Schema({
  id: { type: ObjectId },
  employer_id: { type: ObjectId },
  deposit_amount:{type: Number},
  create_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "TransactionHistories",
  transactionHistorySchema
);
