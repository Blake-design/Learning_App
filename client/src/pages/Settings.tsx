import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ThemeButton } from "../components";
const Settings = () => {
  const { loading: loading2, data: me } = useQuery(QUERY_ME);
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
