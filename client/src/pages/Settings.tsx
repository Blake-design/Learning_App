import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { MeQueryProps } from "../types";
import { ThemeButton } from "../components";
import { REMOVE_USER } from "../utils/mutations";
import auth from "../utils/auth";
import Requests from "../components/Requests";
import { request } from "http";
import LoggedIn from "./LoggedIn";

const Settings = ({ me }: MeQueryProps) => {
  const [removeUser, { error }] = useMutation(REMOVE_USER);

  const handleRemove = async () => {
    await removeUser();
    auth.logout();
  };

  return me ? (
    <section className="page-container">
      <h1>this is the settings page</h1>
      <ul>
        <li>
          Theme style <ThemeButton />
        </li>
        <li>Show when active</li>
        <li>
          Remove account <button onClick={handleRemove}>Delete Data</button>
        </li>
        <Requests me={me} />
      </ul>
    </section>
  ) : (
    <LoggedIn />
  );
};

export default Settings;
