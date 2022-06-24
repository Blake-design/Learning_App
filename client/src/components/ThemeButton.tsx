import React from "react";
import { GetThemeContext } from "../state/theme";

const ThemeButton = () => {
  const [darkMode, setDarkMode] = GetThemeContext();

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return <button onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>;
};

export default ThemeButton;
