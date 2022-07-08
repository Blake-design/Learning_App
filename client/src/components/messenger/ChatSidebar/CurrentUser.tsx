import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONVO } from "../../../utils/mutations";
import BadgeAvatar from "./BadgeAvatar";

const CurrentUser = ({ friend }: any) => {
  const [createConvo, { error }] = useMutation(CREATE_CONVO);
  const handleClick = async (e: any) => {
    //TODO: on click this will add user to conversation

    const convo = await createConvo({
      variables: { username: e.target.value },
    });

    console.log(convo);
  };

  return (
    <div className="sb-currentUser-container">
      <BadgeAvatar />
      <div className="sb-currentUser-subContainer">
        <h3>{friend}</h3>
        <button value={friend} onClick={(e) => handleClick(e)}>
          start chat
        </button>
      </div>
    </div>
  );
};

export default CurrentUser;
