import React from "react";
import { Link } from "react-router-dom";
import "./navIcon.css";
import { NavIconType } from "../types/types";

const NavIcon = ({ icon, alt, to }: NavIconType) => {
  return (
    <Link to={to}>
      <img className="nav-icons" src={icon} alt={alt} />
    </Link>
  );
};

export default NavIcon;
