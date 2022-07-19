import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";
import BadgeAvatar from "./BadgeAvatar";

const LastMessage = ({ convo, handleClick }: any) => {
  const { data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: convo?._id,
    },
  });

  const lastMessage = data?.messages?.length
    ? data?.messages[data?.messages?.length - 1]
    : null;

  return data?.messages?.length && lastMessage ? (
    <div className="sb-chat-preview">
      <BadgeAvatar src={`./avatars/${lastMessage.senderId?.avatar}`} />
      <p className="sb-chat-preview-username">
        {lastMessage.senderId?.username}:{" "}
      </p>
      <p className="sb-chat-preview-text">{lastMessage.text}</p>
    </div>
  ) : null;
};

export default LastMessage;
