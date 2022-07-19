import { useEffect, useState } from "react";

const useSetTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme");

    if (theme && theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("preferred-theme", "dark");
    } else {
      localStorage.setItem("preferred-theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};

export { useSetTheme };
