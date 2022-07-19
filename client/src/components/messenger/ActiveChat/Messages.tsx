import React, { useEffect, useRef, useLayoutEffect } from "react";

import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ messages, me, subscribeToMessages }: any) => {
  useEffect(() => {
    subscribeToMessages();
  }, [subscribeToMessages]); /// If 'subscribeToMessages' changes too often, find the parent component that defines it and wrap that definition in useCallback

  const ref = useRef<HTMLDivElement>(null);
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
