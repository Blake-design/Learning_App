import React from "react";
import { BadgeAvatarType } from "../../../types";

const BadgeAvatar = ({ src }: BadgeAvatarType) => {
  return (
    <div>
      <img className="badge-avatar" src={src} alt="avatar" />
    </div>
  );
};

export default BadgeAvatar;
