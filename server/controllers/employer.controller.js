var employer = require("../models/employer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var wallet = require("../models/wallet.model");

const validateEmail = (email) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const dataIsValid = (data) => {
  for (let i in data) {
    if (typeof data[i] === "string") {
      if (data[i].trim().length === 0) return false;
    }
  }
  return true;
};

module.exports = {
  // employer login
  login: async (req, res, next) => {
    if (dataIsValid(req.body)) {
      const username = req.body.username;
      if (validateEmail(username)) {
        // check xem co phai email k
        var account = await employer.findOne({ email: username });
      } else {
        // k phai email
        var account = await employer.findOne({ phone_number: username });
      }
      if (account) {
        // co tai khoan
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
            res.json({ success: true, message: accessToken });
          } else res.json({ success: false, message: "Invalid Credentials" });
        } catch (error) {
          console.log(error.message);
        }
      } // khong co tai khoan
      else
        res.json({
          success: false,
          message: "Email or phone number incorrect",
        });
    } else res.json({ success: false, message: "Data is null" });
  },

  // employer Register
  register: async (req, res, next) => {
    if (dataIsValid(req.body)) {
      try {
        const username = req.body.username;
        const hash_password = await bcrypt.hash(req.body.password, 10);
        if (validateEmail(username)) {
          // check xem co phai email k
          var model = new employer({
            email: username,
            password: hash_password,
          });
        } else {
          // k phai email
          var model = new employer({
            phone_number: username,
            password: hash_password,
          });
        }
        model.save((error) => {
          if (error) res.json({ success: false, message: error.message });
          else {
            const walletModel = new wallet({
              employer_id: model._id,
              balance: 0,
            });
            walletModel.save((error) => {
              if (error) res.json({ success: false, message: error.message });
              else res.json({ success: true, message: "Register success" });
            });
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    } else res.json({ success: false, message: "Data is null" });
  },
  update_profile_employer: async (req, res, next) => {
    try {
      if (dataIsValid(req.body)) {
        const {
          id,
          email,
          employer_name,
          phone_number,
          owner_name,
          image_url,
          address,
          information,
        } = req.body;
        const employers = await employer.findOne({ _id: id });
        employers.email = email;
        employers.phone_number = phone_number;
        employers.employer_name = employer_name;
        employers.owner_name = owner_name;
        employers.image_url = image_url;
        employers.information = information;
        employers.address = address;
        employers.save((error) => {
          if (error) res.json({ success: false, message: error.message });
          else res.json({ success: true, message: "Update success" });
        });
      } else res.send({ success: false, message: "Model not found" });
    } catch (error) {
      console.log(error.message);
    }
  },
};
