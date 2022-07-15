import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";

const LastMessage = ({ convo, handleClick }: any) => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: convo?._id,
    },
  });

  console.log(data);

  const lastMessage = data?.messages?.length
    ? data?.messages[data?.messages?.length - 1]
    : null;

  return data?.messages?.length && lastMessage ? (
    <div>
      <h5 className="sb-chat-username">{lastMessage.senderId?.username}</h5>
      <p className="sb-chat-preview">{lastMessage.text}</p>
    </div>
  ) : null;
};

export default LastMessage;
