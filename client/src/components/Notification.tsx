import React from "react";
import { NotificationProp } from "../types/types";

const Notification = ({ username, event }: NotificationProp) => {
  return (
    <div>
      <p>{`${username} just  ${event}`}</p>
    </div>
  );
};

export default Notification;
