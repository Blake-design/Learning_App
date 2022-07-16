import React from "react";
import Auth from "../utils/auth";

const LoggedIn = () => {
  return Auth.loggedin() ? (
    <div>ooops.... you're already logged in</div>
  ) : (
    <div>you are not logged in</div>
  );
};

export default LoggedIn;
