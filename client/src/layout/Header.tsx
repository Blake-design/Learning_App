import { LoginButton } from "../components";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">The Learning App</Link>
      </h1>

      <LoginButton />
    </header>
  );
};

export default Header;
