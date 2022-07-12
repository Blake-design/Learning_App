import React from "react";

const OtherUserBubble = ({ text, time, formatTime }: any) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="msg-avatar">🙂</div>
      <div>
        <p className="msg-date">{formatTime(time)}</p>
        <div className="res-bubble">
          <p className="msg-content response">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherUserBubble;
