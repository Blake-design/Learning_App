import React, { createContext, useEffect, useReducer, useContext } from "react";

enum ThemeActionKind {
  SET_THEME = "SET_THEME",
}

interface ThemeAction {
  type: ThemeActionKind;
  payload: boolean;
}

interface ThemeState {
  darkMode: boolean;
}
interface ThemeCTX {
  darkMode: boolean;
  setDarkMode?: (bool: boolean) => void;
}

const darkModeContext = createContext<ThemeCTX>({ darkMode: false });

export const darkModeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionKind.SET_THEME:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

const DarkModeState = (props: any) => {
  const [state, dispatch] = useReducer(darkModeReducer, { darkMode: false });

  const setDarkMode = (bool: boolean) => {
    dispatch({ type: ThemeActionKind.SET_THEME, payload: bool });
  };

  return (
    <darkModeContext.Provider value={{ darkMode: state.darkMode, setDarkMode }}>
      {props.children}
    </darkModeContext.Provider>
  );
};

const GetThemeContext = () => {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme");
    if (setDarkMode) {
      if (theme && theme === "dark") {
        setDarkMode(true);
      } else {
        localStorage.setItem("preferred-theme", "light");
        setDarkMode(false);
      }
    }
  }, []);
  return darkMode;
};

export { DarkModeState, GetThemeContext, darkModeContext };
