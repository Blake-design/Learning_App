import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Profile, Settings } from "./pages/";
import "./App.css";
import { Header } from "./layout";
import { themeVar } from "./cache";

function App() {
  return (
    <div className={themeVar() === "dark" ? "dark" : ""}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:userID" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
