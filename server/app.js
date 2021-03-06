var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var employerRouter = require("./routes/employer.routes");
var candidateRouter = require("./routes/candidate.routes");
var jobRouter = require("./routes/job.routes");
var managerRouter = require("./routes/manager.routes");
var walletRouter = require("./routes/wallet.routes");
var transactionRouter = require("./routes/transaction.routes");
var applideJobRouter = require("./routes/appliedJob.routes");


var app = express();
var mongoose = require("mongoose");

// connect to Database

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("DB error", err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// using session
app.use(
  session({
    secret: process.env.JWT_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// using cors
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/employer", employerRouter);
app.use("/candidate", candidateRouter);
app.use("/job", jobRouter);
app.use("/manager", managerRouter);
app.use("/wallet", walletRouter);
app.use("/transaction", transactionRouter);
app.use("/appliedJob", applideJobRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send("Error API (check ph????ng th???c get post)");
});

module.exports = app;
