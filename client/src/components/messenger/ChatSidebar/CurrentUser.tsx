import React, { useState } from "react";

import BadgeAvatar from "./BadgeAvatar";
import { FriendType } from "../../../types/types";
import { ConvoForm } from ".";

const CurrentUser = ({ _id, username, avatar }: FriendType) => {
  const [openConvo, setOpenConvo] = useState(false);

  const handleClick = async () => {
    //TODO: on click this will add user to conversation
    setOpenConvo(!openConvo);
  };

  return !openConvo ? (
    <div className="sb-currentUser-container">
      <BadgeAvatar src={`./avatars/${avatar}`} />
      <div className="sb-currentUser-subContainer">
        <h3>{username}</h3>
        <button onClick={handleClick}>start chat</button>
      </div>
    </div>
  ) : (
    <ConvoForm _id={_id} setOpenConvo={setOpenConvo} />
  );
};

export default CurrentUser;
