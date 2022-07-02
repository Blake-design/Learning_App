import { useSubscription } from "@apollo/client";
import React from "react";
import { MessengerApp } from "../components/messenger";
import { GET_USER_ACTIVE } from "../utils/queries";

const Messenger = () => {
  const { data } = useSubscription(GET_USER_ACTIVE);
  console.log(data);
  return (
    <section>
      <MessengerApp />
    </section>
  );
};

export default Messenger;
