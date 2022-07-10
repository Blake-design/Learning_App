import React from "react";

const ChatContent = ({ convo, handleClick }: any) => {
  return (
    <div
      className="sb-chat-content-container"
      onClick={() => handleClick(convo)}
    >
      <h4>roomName</h4>
      <div className="sb-chat-content-subContainer">
        <div>
          <h4 className="sb-chat-username">frank bologna</h4>
          <p className="sb-chat-preview">you still there?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
