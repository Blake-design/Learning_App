import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Profile, Settings, Messenger } from "./pages/";
import "./App.css";
import { Footer, Header, Sidebar } from "./layout";
import { themeVar } from "./cache";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "./utils/queries";

function App() {
  const { loading, data } = useQuery(QUERY_USERS);

  if (loading) {
    <div>...loading</div>;
  }

  return (
    <div className={themeVar() === "dark" ? "dark" : ""}>
      <Header />
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home users={data?.users} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/messenger"
            element={<Messenger users={data?.users} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
