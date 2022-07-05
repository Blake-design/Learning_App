import React from "react";
import { MessengerApp } from "../components/messenger";
import { UsersQueryProp } from "../types";

const Messenger = ({ users }: UsersQueryProp) => {
  console.log(users);
  return (
    <section className="page-container">
      <MessengerApp />
    </section>
  );
};

export default Messenger;
