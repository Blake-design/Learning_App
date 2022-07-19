import React from "react";
import { Friends, ChatRooms } from ".";
import { ChatSidebarProp } from "../../../types/types";
import "./msg-sidebar.css";

const ChatSidebar = ({ me, selectConvo }: ChatSidebarProp) => {
  return (
    <div className="sb-wrapper">
      <Friends friends={me?.friends} />
      <ChatRooms selectConvo={selectConvo} />
    </div>
  );
};

export default ChatSidebar;
