import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavIcon } from ".";
import { QueryMeData } from "../types/types";
import Auth from "../utils/auth";

import { LOGOUT_USER } from "../utils/mutations";
import auth from "../utils/auth";

const LoginButton = ({ me }: QueryMeData) => {
  const navigate = useNavigate();

  const [logout] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    await logout();
    auth.logout();
  };

  if (Auth.loggedin() && me) {
    return (
      <nav>
        <NavIcon
          icon={`/avatars/${me?.avatar}`}
          alt={"Settings"}
          to="/settings"
          title="settings"
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
