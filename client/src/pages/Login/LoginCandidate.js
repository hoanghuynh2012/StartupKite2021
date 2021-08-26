import React, { useEffect, useState } from "react";
import { loginApi } from "../../apis/candidate.api.js";

const LoginCandidate = () => {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    const login = async (username, password) => {
      const response = await loginApi("quoctung2606@gmail.com", "123456"); // test API
      console.log(response.success);
    };
    login();
  }, []);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default LoginCandidate;
