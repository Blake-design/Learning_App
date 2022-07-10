import React from "react";
import { BadgeAvatarType } from "../../../types";

const BadgeAvatar = ({ src, alt }: BadgeAvatarType) => {
  return (
    <div>
      <img className="" src={src} alt={alt} />
    </div>
  );
};

export default BadgeAvatar;
