import React from "react";
import { TextBubbleProp } from "../../../types/types";

const SenderBubble = ({ text, time, formatTime }: TextBubbleProp) => {
  return (
    <div className="msg-wrapper">
      <p className="msg-date">{formatTime(time)}</p>
      <div className="msg-bubble">
        <p className="msg-content">{text}</p>
      </div>
    </div>
  );
};

export default SenderBubble;
