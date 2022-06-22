import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Welcome to the Learning app!</h1>
      <div>
        <button onClick={() => navigate("/login")}>LOG IN</button>
        <button onClick={() => navigate("/signup")}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Home;
