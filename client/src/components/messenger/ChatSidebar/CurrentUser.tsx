import React from "react";
import BadgeAvatar from "./BadgeAvatar";

const CurrentUser = () => {
  return (
    <div className="sb-currentUser-container">
      <BadgeAvatar />
      <div className="sb-currentUser-subContainer">
        <h3>username</h3>
      </div>
    </div>
  );
};

export default CurrentUser;
