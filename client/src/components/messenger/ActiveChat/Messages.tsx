import React, { useEffect, useRef, useLayoutEffect } from "react";

import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ messages, me, subscribeToMessages }: any) => {
  useEffect(() => {
    subscribeToMessages();
  }, []);

  const ref = useRef<HTMLDivElement>();
  const formatTime = (time: number) => {
    return new Date(time).toLocaleTimeString();
  };

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    messages && (
      <div className="messages" ref={ref}>
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
