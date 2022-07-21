import React from "react";
import { Link } from "react-router-dom";
import "./navIcon.css";
import { NavIconType } from "../types/types";

const NavIcon = ({ icon, alt, to, title }: NavIconType) => {
  return (
    <Link to={to}>
      <img className="nav-icons" src={icon} alt={alt} title={title} />
    </Link>
  );
};

export default NavIcon;
