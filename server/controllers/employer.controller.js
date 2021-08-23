var employer = require("../models/employer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var wallet = require("../models/wallet.model");
module.exports = {
  // employer login
  login: async (req, res, next) => {
    const account = await employer.findOne({ email: req.body.email });
    try {
      const matches = await bcrypt.compare(req.body.password, account.password);
      const accessToken = jwt.sign(
        JSON.stringify(account),
        process.env.JWT_KEY
      );
      if (matches) {
        req.session.token = accessToken;
        res.json({ accessToken: accessToken });
      } else {
        res.json({ message: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  // employer Register
  register: async (req, res, next) => {
    try {
      const hash_password = await bcrypt.hash(req.body.password, 10);
      const model = new employer({
        email: req.body.email,
        password: hash_password,
      });
      model.save((error) => {
        if (error) res.json({ msg: error.message });
        else {
          const walletModel = new wallet({
            employer_id: model._id,
            balance: 0,
          });
          walletModel.save((error) => {
            if (error) res.json({ msg: error.message });
            else res.json({ msg: "success" });
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};