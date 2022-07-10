import React from "react";
import { ActiveChat } from "./ActiveChat";
import { ChatSidebar } from "./ChatSidebar";
import "./messenger.css";
import { UsersQueryProp } from "../../types";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const MessengerApp = ({ users }: UsersQueryProp) => {
  const { loading, data } = useQuery(QUERY_ME);
  return (
    <div className="messenger-container">
      <ChatSidebar users={users} data={data} />
      <ActiveChat />
    </div>
  );
};

export default MessengerApp;
