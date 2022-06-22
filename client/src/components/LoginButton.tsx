import React from "react";
import { useNavigate } from "react-router-dom";
import { GetUserContext } from "../state/user";
import Auth from "../utils/auth";

const LoginButton = () => {
  const { user, handleLogout } = GetUserContext();
  const navigate = useNavigate();
  console.log(user);
  if (Auth.loggedin()) {
    return <button onClick={() => handleLogout}>LOG OUT</button>;
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
