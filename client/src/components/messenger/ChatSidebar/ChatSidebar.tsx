import React from "react";
import { Chat, CurrentUser, Search } from ".";
import "./msg-sidebar.css";
import { FriendType, UsersQueryProp } from "../../../types";

import { useMutation } from "@apollo/client";

const ChatSidebar = ({ users, data, selectConvo }: any) => {
  console.log(data);
  const convos = data?.me?.convos;
  return (
    data && (
      <div className="sb-wrapper">
        {data?.me?.friends?.map((friend: FriendType) => (
          <CurrentUser
            key={friend?._id}
            username={friend?.username}
            _id={friend?._id}
            avatar={friend?.avatar}
          />
        ))}

        <h3 className="sb-title">Open Chats - {convos?.length}</h3>
        <Search />
        <Chat data={data} selectConvo={selectConvo} />
      </div>
    )
  );
};

export default ChatSidebar;
