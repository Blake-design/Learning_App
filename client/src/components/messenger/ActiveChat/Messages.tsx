import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";
import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ currentConvo }: any) => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: currentConvo,
    },
  });

  console.log(data);
  return (
    data && (
      <div>
        <SenderBubble />
        <OtherUserBubble />
      </div>
    )
  );
};

export default Messages;
