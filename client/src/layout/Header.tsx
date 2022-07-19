import { LoginButton } from "../components";
import { Link } from "react-router-dom";
import { MeQueryProps } from "../types";
import "./layout.css";

const Header = ({ me }: MeQueryProps) => {
  return (
    <header>
      <h1>
        <Link to="/">The Learning App</Link>
      </h1>

      <LoginButton me={me} />
    </header>
  );
};

export default Header;
