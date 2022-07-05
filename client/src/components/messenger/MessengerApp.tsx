import React from "react";
import { ActiveChat } from "./ActiveChat";
import { ChatSidebar } from "./ChatSidebar";
import "./messenger.css";
import { UsersQueryProp } from "../../types";

const MessengerApp = ({ users }: UsersQueryProp) => {
  return (
    <div className="messenger-container">
      <ChatSidebar users={users} />
      <ActiveChat />
    </div>
  );
};

export default MessengerApp;
