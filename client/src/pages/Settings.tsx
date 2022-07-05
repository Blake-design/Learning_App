import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ThemeButton } from "../components";
import { REMOVE_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Settings = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [removeUser, { error }] = useMutation(REMOVE_USER);

  const handleClick = async () => {
    await removeUser();
    auth.logout();
  };

  return data ? (
    <section className="page-container">
      <h1>this is the settings page</h1>
      <ul>
        <li>
          Theme style <ThemeButton />
        </li>
        <li>Show when active</li>
        <li>
          Remove account <button onClick={handleClick}>Delete Data</button>
        </li>
      </ul>
    </section>
  ) : (
    <section>
      <div>you are not logged in</div>
    </section>
  );
};

export default Settings;
