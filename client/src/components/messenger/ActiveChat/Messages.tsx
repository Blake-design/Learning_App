import React, { useEffect } from "react";

import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ messages, me, subscribeToMessages }: any) => {
  useEffect(() => {
    subscribeToMessages();
  });

  const formatTime = (time: number) =>
    new Date(time * 1000).toLocaleTimeString();

  return (
    messages && (
      <div>
        {messages.map((message: any, i: number) => {
          return message.senderId === me?._id ? (
            <SenderBubble
              key={i}
              text={message.text}
              time={message.createdAt}
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
