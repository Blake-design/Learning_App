import { LoginButton } from "../components";
import { Link } from "react-router-dom";
import { QueryMeData } from "../types/types";
import "./layout.css";

const Header = ({ me }: QueryMeData) => {
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
