import React from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { QUERY_ME, GET_ACTIVE_USERS } from "../utils/queries";
const Home = () => {
  const { data, loading: loading1 } = useSubscription(GET_ACTIVE_USERS);
  const { loading: loading2, data: me } = useQuery(QUERY_ME);

  if (loading1) {
    <div>...loading</div>;
  }
  console.log(data);
  return (
    <section className="page-container">
      <h1>Welcome to the Learning app!</h1>

      <p> There are currently users logged in. </p>
    </section>
  );
};

export default Home;
