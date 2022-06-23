import React from "react";
import { GetThemeContext } from "../state/theme";

const ThemeButton = () => {
  const { darkMode, setDarkMode } = GetThemeContext();

  const handleClick = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
    }
  };

  return <button onClick={handleClick}>{darkMode ? "🌑" : "☀️"}</button>;
};

export default ThemeButton;
