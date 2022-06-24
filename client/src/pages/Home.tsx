import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  if (loading) {
    <div>...loading</div>;
  }
  console.log(data);

  return (
    <main className="container">
      <h1>Welcome to the Learning app!</h1>
    </main>
  );
};

export default Home;
