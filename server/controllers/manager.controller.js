var manager = require("../models/manager.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req, res, next) => {
          const account = await manager.findOne({ username: req.body.username });
          try {
            const matches = await bcrypt.compare(
              req.body.password,
              account.password
            );
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
  // 
    register: async (req, res, next) => {
    try {
      const hash_password = await bcrypt.hash(req.body.password, 10);
      const model = new manager({
        username: req.body.username,
        password: hash_password,
      });
      model.save((error) => {
        if (error) res.json({ msg: error.message });
        else res.json({ msg: "success" });
      });
    } catch (error) {
      console.log(error.message);
    }
  },
    // 
}
