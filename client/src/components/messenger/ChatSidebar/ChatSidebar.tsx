import React from "react";
import { Friends, ChatRooms } from ".";
import "./msg-sidebar.css";
import { UsersQueryProp } from "../../../types";

const ChatSidebar = ({ me, selectConvo }: any) => {
  return (
    <div className="sb-wrapper">
      <Friends friends={me?.friends} />
      <ChatRooms selectConvo={selectConvo} />
    </div>
  );
};

export default ChatSidebar;
