import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavIcon } from ".";

import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";

const LoginButton = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_ME);

  if (Auth.loggedin() && data) {
    return (
      <nav>
        <NavIcon
          icon={`/avatars/${data.me.avatar}`}
          alt={"Settings"}
          to="/settings"
        />
        <button onClick={Auth.logout}>LOG OUT</button>
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
