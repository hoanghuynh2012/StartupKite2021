var jwt = require("jsonwebtoken");

exports.checkLogin = function (req, res, next) {
  let token = req.session.token;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        res.json({ msg: "err sai token" });
      } else {
        next();
      }
    });
  } else {
    res.json({ msg: "err không có token" });
  }
};
