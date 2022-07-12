import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MESSAGES } from "../../../utils/queries";
import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ currentConvo, me }: any) => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: currentConvo,
    },
  });

  const formatTime = (time: number) =>
    new Date(time * 1000).toLocaleTimeString();

  return (
    data && (
      <div>
        {data.messages?.map((message: any) => {
          console.log(message.senderId);
          console.log(me?._id);
          return message.senderId === me?._id ? (
            <SenderBubble
              text={message.text}
              time={message.createdAt}
              formatTime={formatTime}
            />
          ) : (
            <OtherUserBubble
              text={message.text}
              time={message.createdAt}
              formatTime={formatTime}
            />
          );
        })}
      </div>
    )
  );
};

export default Messages;
