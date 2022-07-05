import React from "react";
import { ACHeaderProps } from "../../../types";

const ActiveChatHeader = ({ username, online }: ACHeaderProps) => {
  return (
    <div className="chat-header">
      <div className="container">
        <h3 className="username">username</h3>
        <div className="status-dot online"></div>
        <h4 className="status-text online">online</h4>
      </div>
    </div>
  );
};

export default ActiveChatHeader;
