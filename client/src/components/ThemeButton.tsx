import React from "react";
import { useSetTheme } from "../state/theme";

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useSetTheme();

  const handleClick = () => {
    setDarkMode(!darkMode);
    window.location.reload();
  };

  return <button onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>;
};

export default ThemeButton;
