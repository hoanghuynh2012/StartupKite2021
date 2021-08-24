const { log } = require("debug");
var transaction = require("../models/transaction.model");

module.exports = {
  //get transaction
  getTransactions: async (req, res, next) => {
    const results = await transaction.find({
      type: req.body.type,
      status: true,
    });
    if (results) {
      res.json(results);
    } else {
      res.json({ message: "Invalid" });
    }
  },

  //add transaction
  addNewTransaction: async (req, res, next) => {
    const model = new transaction(req.body);
    model.save((error) => {
      if (error) res.json(error.message);
      else res.json({ msg: "success" });
    });
  },

  //update transaction
  updateTransaction: async (body) => {
    const results = await transaction.findOne({ _id: body.id });
    results.status = false;
    const model = new transaction(results);
    model.save((error) => {
      if (error) {
        console.log(error);
        return false;
      }
    });
    return true;
  },
};
