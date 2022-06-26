import React from "react";
import {
  convoIcon,
  dashboardIcon,
  profileIcon,
  leaderboardIcon,
} from "../assets/icons";
import { NavIcon } from "../components";

const Sidebar = () => {
  return (
    <aside>
      <NavIcon to="/" icon={dashboardIcon} alt="dashboard" />

      <NavIcon to="/profile" icon={profileIcon} alt="profile" />

      <NavIcon to="/messenger" icon={convoIcon} alt="messenger" />

      <NavIcon to="/leaderboard" icon={leaderboardIcon} alt="leaderboard" />
    </aside>
  );
};

export default Sidebar;
