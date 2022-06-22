import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Home, Login, Signup } from "./pages/";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
