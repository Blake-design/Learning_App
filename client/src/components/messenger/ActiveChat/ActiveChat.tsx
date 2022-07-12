import React from "react";
import { ActiveChatHeader, Messages, Input } from ".";
import "./activeChat.css";

const ActiveChat = ({ currentConvo, me }: any) => {
  return (
    <section className="chat-wrapper">
      <ActiveChatHeader currentConvo={currentConvo} />
      <div className="messages-container">
        <Messages currentConvo={currentConvo} me={me} />
        <Input currentConvo={currentConvo} />
      </div>
    </section>
  );
};

export default ActiveChat;
