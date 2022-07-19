import React from "react";
import { Friends, ChatRooms } from ".";
import "./msg-sidebar.css";

const ChatSidebar = ({ me, selectConvo }: any) => {
  return (
    <div className="sb-wrapper">
      <Friends friends={me?.friends} />
      <ChatRooms selectConvo={selectConvo} />
    </div>
  );
};

export default ChatSidebar;
