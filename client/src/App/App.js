import "../assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import LoginPageCandidate from "../pages/Login/LoginCandidate";
import RegisterPageCandidate from "../pages/Register/RegisterCandidate";
import LoginPageEmployer from "../pages/Login/LoginEmployer";
import RegisterPageEmployer from "../pages/Register/RegisterEmployer";
import LoginPageManager from "../pages/Login/LoginManager";

import page404 from "../components/Page404/page404";

function App() {
  return (
    <Router>
      <Switch>
        {/* Trang Chủ */}
        <Route exact path="/" component={HomePage} />
        {/* Đăng nhập cho ứng viên */}
        <Route path="/signin" component={LoginPageCandidate} />
        {/* Đăng kí cho ứng viên */}
        <Route path="/signup" component={RegisterPageCandidate} />
        {/* Đăng nhập cho doanh nghiệp */}
        <Route path="/signin-employer" component={LoginPageEmployer} />
        {/* Đăng kí cho doanh nghiệp */}
        <Route path="/signup-employer" component={RegisterPageEmployer} />
        {/* Đăng nhập cho quản lí */}
        <Route path="/login-manager" component={LoginPageManager} />
        {/* Page error 404 */}
        <Route path="/page404" component={page404} />
        <Redirect from="*" to="/page404" />
      </Switch>
    </Router>
  );
}

export default App;
