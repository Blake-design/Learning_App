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
  const { data } = useQuery(QUERY_ME);

  return (
    <div className="messenger-app-wrapper">
      <ChatSidebar me={data?.me} selectConvo={selectConvo} />
      {currentConvo.length ? (
        <ActiveChat currentConvo={currentConvo} me={data?.me} />
      ) : null}
    </div>
  );
};

export default MessengerApp;
