import React, { useContext } from "react";
import { darkModeContext } from "../state/theme";

const Header = () => {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;
  const handleClick = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
    }
  };

  return (
    <header>
      <h1>The Learning App</h1>

      <button onClick={handleClick}>Theme</button>
    </header>
  );
};

export default Header;
