import React from "react";
import { ActiveChat } from "./Active Chat";
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
