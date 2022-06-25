import React from "react";

import { ThemeButton } from "../components";
const Settings = () => {
  return (
    <main>
      <h1>this is the settings page</h1>
      <ul>
        <li>
          Theme style <ThemeButton />
        </li>
        <li>Show when active</li>
      </ul>
    </main>
  );
};

export default Settings;
