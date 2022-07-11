import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONVO } from "../../../utils/mutations";
import BadgeAvatar from "./BadgeAvatar";
import { FriendType } from "../../../types";

const CurrentUser = ({ _id, username, avatar }: FriendType) => {
  const [createConvo, { error }] = useMutation(CREATE_CONVO);
  const handleClick = async () => {
    //TODO: on click this will add user to conversation

    const convo = await createConvo({
      variables: { _id },
    });
  };

  return (
    <div className="sb-currentUser-container">
      <BadgeAvatar src={`./avatars/${avatar}`} alt={"avatar"} />
      <div className="sb-currentUser-subContainer">
        <h3>{username}</h3>
        <button onClick={handleClick}>start chat</button>
      </div>
    </div>
  );
};

export default CurrentUser;
