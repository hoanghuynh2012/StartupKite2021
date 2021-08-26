import "../assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import RegisterPage from "../pages/Register/Register";

import page404 from "../components/Page404/page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/page404" component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
