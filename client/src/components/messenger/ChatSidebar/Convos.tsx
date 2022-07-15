import React from "react";
import { LastMessage } from ".";

const Convos = ({ convos, handleClick }: any) => {
  return (
    <div className="sb-chat-container">
      {convos?.map((convo: any) => {
        return (
          <div
            key={convo._id}
            className="sb-chat-content-container"
            onClick={() => handleClick(convo)}
          >
            <h5>roomName: {convo.roomName}</h5>
            <div className="sb-chat-content-subContainer">
              <LastMessage convo={convo} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Convos;
