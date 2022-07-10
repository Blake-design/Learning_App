import React from "react";
import { Chat, CurrentUser, Search } from ".";
import "./msg-sidebar.css";
import { FriendType, UsersQueryProp } from "../../../types";

import { useMutation } from "@apollo/client";

const ChatSidebar = ({ users, data }: any) => {
  console.log(data);
  return (
    data && (
      <div className="sb-wrapper">
        {data?.me?.friends?.map((friend: FriendType) => (
          <CurrentUser
            key={friend?._id}
            username={friend.username}
            _id={friend._id}
            avatar={friend.avatar}
          />
        ))}

        <h3 className="sb-title">Chats</h3>
        <Search />
        <Chat />
      </div>
    )
  );
};

export default ChatSidebar;
