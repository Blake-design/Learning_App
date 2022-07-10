import React from "react";
import { MessengerApp } from "../components/messenger";
import { UsersQueryProp } from "../types";
import auth from "../utils/auth";
const Messenger = ({ users }: UsersQueryProp) => {
  return (
    <section className="page-container">
      {auth.loggedin() ? <MessengerApp users={users} /> : <p>please log in</p>}
    </section>
  );
};

export default Messenger;
