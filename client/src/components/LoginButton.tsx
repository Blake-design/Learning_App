import React from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../utils/auth";

const LoginButton = () => {
  const navigate = useNavigate();

  if (Auth.loggedin()) {
    return <button onClick={() => Auth.logout()}>LOG OUT</button>;
  } else {
    return (
      <div>
        <button onClick={() => navigate("/login")}>LOG IN</button>
        <button onClick={() => navigate("/signup")}>SIGN UP</button>
      </div>
    );
  }
};

export default LoginButton;
