import React from "react";
import { CurrentUser } from ".";
import { FriendsProp, FriendType } from "../../../types/types";

const Friends = ({ friends }: FriendsProp) => {
  return (
    <div className="chat-friends-wrapper">
      <h4 className="sb-title">
        Friends - <span>{friends?.length}</span>
      </h4>
      <div className="chat-friends">
        {friends?.map((friend: FriendType) => (
          <CurrentUser
            key={friend?._id}
            username={friend?.username}
            _id={friend?._id}
            avatar={friend?.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Friends;
