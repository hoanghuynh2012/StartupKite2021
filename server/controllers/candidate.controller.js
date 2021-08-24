var candidate = require("../models/candidate.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  // candidate login
  login: async (req, res, next) => {
    if (dataIsValid(req.body)) {
      // check data null
      const username = req.body.username;
      if (validateEmail(username)) {
        // check xem co phai email k
        var account = await candidate.findOne({ email: username });
      } else {
        // k phai email
        var account = await candidate.findOne({ phone_number: username });
      }
      if (account) {
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
          } else {
            res.json({ success: false, message: "Invalid Credentials" });
          }
        } catch (error) {
          console.log(error.message);
        }
      } else
        res.json({
          success: false,
          message: "Email or phone number incorrect",
        });
    } else res.json({ success: false, message: "Data is null" });
  },

  // user Register
  register: async (req, res, next) => {
    if (dataIsValid(req.body)) {
      // check data null
      try {
        const username = req.body.username;
        const hash_password = await bcrypt.hash(req.body.password, 10);
        if (validateEmail(username)) {
          // check xem co phai email k
          var model = new candidate({
            email: username,
            password: hash_password,
          });
        } else {
          // k phai email
          var model = new candidate({
            phone_number: username,
            password: hash_password,
          });
        }
        model.save((error) => {
          if (error) res.json({ success: false, message: error.message });
          else res.json({ success: true, message: "Register success" });
        });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      res.json({ success: false, message: "Data is null" });
    }
  },
  // update profile user
  // update_profile_user : async(req, res, next) =>{
  //   try{
  //     let id = req.params.id;
  //     employer.findOne({ _id: id},(res,data) =>{
  //       if (err) {
  //         res.send({ error: err });
  //       } else  {
  //         data.id = req.body.id;
  //         data.email = req.body.email;
  //         data.password = data.password;
  //         data.phone_number = req.body.phone_number;
  //         data.full_name = req.body.full_name;
  //         data.avatar = req.body.avatar;
  //         data.date_of_birth = req.body.date_of_birth;
  //         data.gender = req.body.gender;
  //         data.level = req.body.level;
  //         data.address = req.body.address;
  //         data.role = "1";
  //          data.save((err) => {
  //               if (err) {
  //                 res.send({ success: false, message: "update error!" });
  //               } else {
  //                 res.send({ success: true , message: "Update success"});
  //               }
  //             });
  //       }
  //     })
  //   }catch (error) {
  //     console.log(error.message);
  //   }
  //   },
};
