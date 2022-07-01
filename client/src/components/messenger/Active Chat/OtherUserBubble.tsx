import React from "react";

const OtherUserBubble = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="msg-avatar">🙂</div>
      <div>
        <p className="msg-date"> username 12.00PM</p>
        <div className="res-bubble">
          <p className="msg-content response">Hellooo!</p>
        </div>
      </div>
    </div>
  );
};

export default OtherUserBubble;
