import { GetThemeContext } from "../state/theme";
import { LoginButton, ThemeButton } from "./";
import "./header.css";

const Header = () => {
  return (
    <header className={"dark"}>
      <h1>The Learning App</h1>
      <ThemeButton />

      <LoginButton />
    </header>
  );
};

export default Header;
