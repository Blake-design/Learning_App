import React, { useEffect } from "react";

import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ messages, me, subscribeToMessages }: any) => {
  useEffect(() => {
    subscribeToMessages();
  }, []);

  const formatTime = (time: number) => {
    console.log(time);
    return new Date(time).toLocaleTimeString("en-US");
  };
  return (
    messages && (
      <div className="messages">
        {messages.map((message: any, i: number) => {
          return message.senderId._id === me?._id ? (
            <SenderBubble
              key={i}
              text={message.text}
              time={+message.createdAt}
              formatTime={formatTime}
            />
          ) : (
            <OtherUserBubble
              key={i}
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
