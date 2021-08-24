var candidate = require("../models/candidate.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var user = require("../models/candidate.model");
module.exports = {
  // user login
  login: async (req, res, next) => {
    const account = await candidate.findOne({ email: req.body.email });
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

  // user Register
  register: async (req, res, next) => {
    try {
      const hash_password = await bcrypt.hash(req.body.password, 10);
      const model = new candidate({
        email: req.body.email,
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
