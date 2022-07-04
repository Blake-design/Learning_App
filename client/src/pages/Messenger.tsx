import { useSubscription } from "@apollo/client";
import React from "react";
import { MessengerApp } from "../components/messenger";
import { GET_ACTIVE_USERS } from "../utils/queries";

const Messenger = () => {
  const { data } = useSubscription(GET_ACTIVE_USERS);
  console.log(data);
  return (
    <section className="page-container">
      <MessengerApp />
    </section>
  );
};

export default Messenger;
