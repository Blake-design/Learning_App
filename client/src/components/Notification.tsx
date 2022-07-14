import React from "react";

const Notification = ({ username, event }: any) => {
  return (
    <div>
      <p>{`${username} just  ${event}`}</p>
    </div>
  );
};

export default Notification;
