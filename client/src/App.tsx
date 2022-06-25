import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Home, Login, Signup, Profile, Settings } from "./pages/";
import "./App.css";
import { Header } from "./layout";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
