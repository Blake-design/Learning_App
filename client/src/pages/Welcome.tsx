import React, { useState, useEffect } from "react";
import { InfoCard, Tip } from "../components";
import "./welcome.css";

const Welcome = ({ me, users }: any) => {
  const [welcomeCardOpen, setWelcomeCardOpen] = useState(true);
  const [tip, setTip] = useState(1);
  const [next, setNext] = useState(false);
  const [play, setPlay] = useState(false);

  const closeWelcome = () => {
    setWelcomeCardOpen(!welcomeCardOpen);
    setPlay(true);
  };
  const closeNext = () => {
    setNext(!next);
  };

  useEffect(() => {
    if (!welcomeCardOpen && play) {
      const timer = setTimeout(() => {
        console.log(tip);
        setTip((prev) => prev + 1);
      }, 5000);

      if (tip > 3) {
        setPlay(false);
        setNext(true);
        return () => clearTimeout(timer);
      }
    }
  }, [welcomeCardOpen, tip, play]);

  return (
    <section className="page-container">
      {welcomeCardOpen && (
        <InfoCard handleClick={closeWelcome}>
          <h2>Welcome {me?.name}, </h2>
          <p>This is your first time logging in so let me show you around.</p>
          <p className="prompt">
            Click the "<span>X</span>" button once you are ready to begin.
          </p>
        </InfoCard>
      )}
      {play && (
        <div className="split-page">
          <div className="title-section">
            <Tip arrow="up" visible={tip === 1 ? true : false}>
              <h3>Profile Settings</h3>
              <p>The avatar will take you to the settings page</p>
            </Tip>

            <Tip arrow="left" visible={tip === 2 ? true : false}>
              <h3>Navigation</h3>
              <p>The icons on the left will take you around the site</p>
            </Tip>

            <Tip arrow="down" visible={tip === 3 ? true : false}>
              <h3>Live Updates</h3>
              <p>Keep an eye below for live updates</p>
            </Tip>
          </div>

          {tip === 2 && (
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
                &larr; The Trophy is where you keep track of the fastest
                learners
              </li>
            </ul>
          )}
        </div>
      )}
      {next && (
        <InfoCard handleClick={closeNext}>
          <h2>Your ready to begin </h2>
          <p>Please click the bookshelf icon</p>
        </InfoCard>
      )}
    </section>
  );
};

export default Welcome;
