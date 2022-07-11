import React from "react";
import { Convos, CurrentUser, Search } from ".";
import "./msg-sidebar.css";
import { FriendType, UsersQueryProp } from "../../../types";
import { QUERY_CONVOS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";

const ChatSidebar = ({ me, selectConvo }: any) => {
  const { loading, data } = useQuery(QUERY_CONVOS);

  return (
    me &&
    data && (
      <div className="sb-wrapper">
        {me.friends?.map((friend: FriendType) => (
          <CurrentUser
            key={friend?._id}
            username={friend?.username}
            _id={friend?._id}
            avatar={friend?.avatar}
          />
        ))}

        <h3 className="sb-title">Open Chats - {data.convos?.length}</h3>
        <Search />
        <Convos convos={data.convos} handleClick={selectConvo} />
      </div>
    )
  );
};

export default ChatSidebar;
