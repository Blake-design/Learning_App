import React from "react";
import { Chat, CurrentUser, Search } from ".";
import "./msg-sidebar.css";
import { UsersQueryProp } from "../../../types";
import { QUERY_ME } from "../../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";

const ChatSidebar = ({ users }: UsersQueryProp) => {
  const { loading, data } = useQuery(QUERY_ME);
  console.log(data);
  return (
    <div className="sb-wrapper">
      <CurrentUser />
      <h3 className="sb-title">Chats</h3>
      <Search />
      <Chat />
    </div>
  );
};

export default ChatSidebar;
