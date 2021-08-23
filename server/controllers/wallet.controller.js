var wallet = require("../models/wallet.model");
var transaction = require("../models/transaction.model");
var transactionCotroller = require("../controllers/transaction.controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saveToTransaction = (body) => {
  const model = new transaction(body);
  model.save((error) => {
    if (error) return false;
  });
  return true;
};

module.exports = {
  updateMoney: async (req, res, next) => {
    const { creator, receiver, type, amount } = req.body;
    const _wallet = await wallet.findOne({ employer_id: receiver });
    if (saveToTransaction(req.body)) {
      switch (type) {
        case 64680:
          if(await transactionCotroller.updateTransaction(req.body)){
            _wallet.balance += amount;
            _wallet.save((error) => {
              if (error) res.json(error.message);
              else res.json({ msg: "success" });
            });
          } else {
            res.json({ msg: "false"})
          }      
          break;
        case 81709:
          _wallet.balance -= amount;
          _wallet.save((error) => {
            if (error) res.json(error.message);
            else res.json({ msg: "success" });
          });
          break;
        default:
          break;
      }
    }
  },
};
