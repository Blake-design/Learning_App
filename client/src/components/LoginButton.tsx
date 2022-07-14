import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavIcon } from ".";

import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { LOGOUT_USER } from "../utils/mutations";
import auth from "../utils/auth";

const LoginButton = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_ME);
  const [logout, { error }] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    await logout();
    auth.logout();
  };

  if (Auth.loggedin() && data) {
    return (
      <nav>
        <NavIcon
          icon={`/avatars/${data?.me?.avatar}`}
          alt={"Settings"}
          to="/settings"
        />
        <button onClick={handleLogout}>LOG OUT</button>
      </nav>
    );
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
