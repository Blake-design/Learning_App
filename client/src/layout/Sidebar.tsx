import React from "react";
import {
  convoIcon,
  dashboardIcon,
  profileIcon,
  leaderboardIcon,
} from "../assets/icons";
import { NavIcon } from "../components";
import { QueryMeData } from "../types/types";

const Sidebar = ({ me }: QueryMeData) => {
  return (
    <aside>
      <NavIcon to="/" icon={dashboardIcon} alt="dashboard" />

      <NavIcon to={`/${me?.username}`} icon={profileIcon} alt="profile" />

      <NavIcon to="/messenger" icon={convoIcon} alt="messenger" />

      <NavIcon to="/leaderboard" icon={leaderboardIcon} alt="leaderboard" />
    </aside>
  );
};

export default Sidebar;
