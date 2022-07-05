import React from "react";
import { UsersQueryProp } from "../types";

const Home = ({ users }: UsersQueryProp) => {
  return (
    <section className="page-container">
      <h1>Welcome to the Learning app!</h1>

      <p>Join the already {users?.length} users by signing up today! </p>
    </section>
  );
};

export default Home;
