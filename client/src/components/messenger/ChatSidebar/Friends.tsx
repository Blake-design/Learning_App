import React from "react";
import { CurrentUser } from ".";
import { FriendType } from "../../../types";

const Friends = ({ friends }: any) => {
  return (
    <div>
      <h4 className="chat-friends-title">
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
