import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Profile, Settings, Messenger } from "./pages/";
import "./App.css";
import { Footer, Header, Sidebar } from "./layout";
import { themeVar } from "./cache";

function App() {
  return (
    <div className={themeVar() === "dark" ? "dark" : ""}>
      <Header />
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:userID" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
