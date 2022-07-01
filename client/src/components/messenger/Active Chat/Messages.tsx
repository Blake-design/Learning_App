import React from "react";
import OtherUserBubble from "./OtherUserBubble";
import SenderBubble from "./SenderBubble";

const Messages = ({ messages, otherUser, userId }: any) => {
  return (
    <div>
      <SenderBubble />
      <OtherUserBubble />
    </div>
  );
};

export default Messages;
