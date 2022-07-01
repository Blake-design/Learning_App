import React from "react";
import { ActiveChat } from "./ActiveChat";
import { ChatSidebar } from "./ChatSidebar";
import "./messenger.css";

const MessengerApp = () => {
  return (
    <div className="messenger-container">
      <ChatSidebar />
      <ActiveChat />
    </div>
  );
};

export default MessengerApp;
