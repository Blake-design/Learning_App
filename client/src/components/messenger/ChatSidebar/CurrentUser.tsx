import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONVO } from "../../../utils/mutations";
import { QUERY_CONVOS } from "../../../utils/queries";
import BadgeAvatar from "./BadgeAvatar";
import { FriendType } from "../../../types";

const CurrentUser = ({ _id, username, avatar }: FriendType) => {
  const [createConvo] = useMutation(CREATE_CONVO, {
    refetchQueries: [{ query: QUERY_CONVOS }, "Convos"],
  });
  const handleClick = async () => {
    //TODO: on click this will add user to conversation

    await createConvo({
      variables: { _id },
    });
  };

  return (
    <div className="sb-currentUser-container">
      <BadgeAvatar src={`./avatars/${avatar}`} />
      <div className="sb-currentUser-subContainer">
        <h3>{username}</h3>
        <button onClick={handleClick}>start chat</button>
      </div>
    </div>
  );
};

export default CurrentUser;
