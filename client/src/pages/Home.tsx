import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
const Home = () => {
  const { loading: loading1, data: data } = useQuery(QUERY_USERS);
  const { loading: loading2, data: me } = useQuery(QUERY_ME);

  if (loading1) {
    <div>...loading</div>;
  }
  console.log(me);
  return (
    <main>
      <h1>Welcome to the Learning app!</h1>

      <p> There are currently {data && data.users.length} users logged in. </p>
    </main>
  );
};

export default Home;
