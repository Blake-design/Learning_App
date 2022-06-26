import React from "react";
import { Link } from "react-router-dom";
import "./navIcon.css";

interface NavIcon {
  icon: string;
  alt: string;
  to: string;
}

const NavIcon = ({ icon, alt, to }: NavIcon) => {
  return (
    <Link to={to}>
      <img className="nav-icons" src={icon} alt={alt} />
    </Link>
  );
};

export default NavIcon;
