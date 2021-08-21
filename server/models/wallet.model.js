const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const walletSchema = new Schema({
  id: { type: ObjectId },
  employer_id: { type: ObjectId },
  balance: { type: Number },
});

module.exports = mongoose.model("Wallets", walletSchema);
