import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";

const LastMessage = ({ convo, handleClick }: any) => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      _id: convo?._id,
    },
  });

  console.log(data);
  return (
    data && (
      <div>
        <h4 className="sb-chat-username">data</h4>
        <p className="sb-chat-preview">you still there?</p>
      </div>
    )
  );
};

export default LastMessage;
