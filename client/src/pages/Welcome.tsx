import React, { useState } from "react";
import { WelcomeCard, Tip } from "../components";
import "./welcome.css";

const Welcome = ({ me, users }: any) => {
  const [welcomeCardOpen, setWelcomeCardOpen] = useState(true);

  const handleClick = () => {
    setWelcomeCardOpen(!welcomeCardOpen);
  };

  return (
    <section className="page-container">
      {welcomeCardOpen ? (
        <WelcomeCard handleClick={handleClick} me={me} />
      ) : (
        <div className="split-page">
          <div className="title-section">
            <Tip arrow="up">
              <h3>Profile Settings</h3>
              <p>The avatar will take you to the settings page</p>
            </Tip>
            <Tip arrow="left">
              <h3>Navigation</h3>
              <p>The icons on the left will take you around the site</p>
            </Tip>
            <Tip arrow="down">
              <h3>Live Updates</h3>
              <p>Keep an eye below for live updates</p>
            </Tip>
          </div>

          <ul className="nav-list">
            <li>&larr; The Bookshelf is where you find new lessons</li>
            <li>
              &larr; The Quill Pen is where you go to tell us more about
              yourself
            </li>
            <li>
              &larr; The Message Bubbles are where you can chat with friends
            </li>
            <li>
              &larr; The Trophy is where you keep track of the fastest learners
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Welcome;
