import React from "react";
import { CurrentConvoProp } from "../../../types/types";

const ActiveChatHeader = ({ currentConvo }: CurrentConvoProp) => {
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
