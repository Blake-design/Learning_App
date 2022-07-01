import React from "react";
import { Chat, CurrentUser, Search } from ".";
import "./msg-sidebar.css";

const ChatSidebar = () => {
  return (
    <div className="sb-wrapper">
      <CurrentUser />
      <h3 className="sb-title">Chats</h3>
      <Search />
      <Chat />
    </div>
  );
};

export default ChatSidebar;
