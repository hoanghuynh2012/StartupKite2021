var employer = require("../models/employer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var wallet = require("../models/wallet.model");
var employer = require("../models/employer.model");
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
// update_profile_employer : async(req, res, next) =>{
// try{
//   let id = req.body.id;
//   employer.findOne({ _id: id},(err,data) =>{
//     if (err) {
//       res.send({ error: err });
//     } else  {
//       data.email = req.body.email;
//       data.password = data.password;
//       data.employer_name = req.body.employer_name;
//       data.phone_number = req.body.phone_number;
//       data.owner_name = req.body.owner_name;
//       data.image_url = req.body.image_url;
//       data.address = req.body.address;
//       data.information = req.body.information;
//        data.save((err) => {
//             if (err) {
//               res.send({ success: false, message: "update error!" });
//             } else {
//               res.send({ success: true , message: "Update success" });
//             }
//           });
//     }
//   })
// }catch (error) {
//   res.send({ success: false, message: error.message });
// }
// },

};
