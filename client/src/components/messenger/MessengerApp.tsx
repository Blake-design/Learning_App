import React, { useState } from "react";
import { ActiveChat } from "./ActiveChat";
import { ChatSidebar } from "./ChatSidebar";
import "./messenger.css";
import { UsersQueryProp } from "../../types";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const MessengerApp = ({ users }: UsersQueryProp) => {
  const [currentConvo, setCurrentConvo] = useState("");

  const selectConvo = (convo: any) => {
    setCurrentConvo(convo._id);
  };
  const { loading, data } = useQuery(QUERY_ME);
  return (
    <div className="messenger-container">
      <ChatSidebar me={data?.me} selectConvo={selectConvo} />
      {currentConvo.length ? <ActiveChat currentConvo={currentConvo} /> : null}
    </div>
  );
};

export default MessengerApp;
