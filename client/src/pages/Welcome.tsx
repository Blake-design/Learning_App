import React from "react";
import "./welcome.css";
const Welcome = ({ me, users }: any) => {
  return (
    <section className="page-container">
      <div className="welcome-card">
        <h1>Welcome {me?.name}, </h1>
        <p>This is your first time logging in so let me show you around</p>
        <p>top right is your avatar</p>
        <p>if you click this you will be taken to your settings page</p>
        <p>on the left is the navigation menu</p>
        <p>
          the book shelf will take you home to select and play your favorite
          games
        </p>
        <p>the Quill pen is where you go to tell us more about yourself</p>
        <p>
          the message bubble is where you can chat with friends and shar all the
          new things you have learned
        </p>
        <p>
          and last but not least the trophy is where you can check to how well
          you measure up to the other learners.
        </p>
      </div>

      {/* 

      <p>over here we have our navigation menu</p>
      <p>
        the book shelf will take you home to select and play your favorite games
      </p>
      <p>the Quill pen is where you go to tell us more about yourself</p>
      <p>
        the message bubble is where you can chat with friends and shar all the
        new things you have learned
      </p>
      <p>
        and last but not least the trophy is where you can check to how well you
        measure up to the other learners.
      </p> */}
    </section>
  );
};

export default Welcome;
