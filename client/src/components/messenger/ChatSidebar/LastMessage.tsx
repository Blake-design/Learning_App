import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";

const LastMessage = ({ convo, handleClick }: any) => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: convo?._id,
    },
  });

  const lastMessage = data?.messages?.length
    ? data?.messages[data?.messages?.length - 1].text
    : null;

  console.log(lastMessage);
  return data?.messages?.length && lastMessage ? (
    <div>
      <h4 className="sb-chat-username">username</h4>
      <p className="sb-chat-preview">{lastMessage}</p>
    </div>
  ) : null;
};

export default LastMessage;
