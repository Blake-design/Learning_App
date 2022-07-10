import React from "react";
import { ChatContent } from ".";

interface ChatProps {
  props: {
    data: any;
  };
}

const Chat = ({ data, selectConvo }: any) => {
  console.log(data);
  const convos = data.me.convos;
  return (
    <div className="sb-chat-container">
      {convos?.map((convo: any) => {
        return <ChatContent convo={convo} handleClick={selectConvo} />;
      })}
    </div>
  );
};

export default Chat;
