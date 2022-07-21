import React from "react";

const WelcomeCard = ({ handleClick, me }: any) => {
  return (
    <div className="welcome-card">
      <button className="close-button" onClick={handleClick}>
        X
      </button>
      <div className="content">
        <h2>Welcome {me?.name}, </h2>

        <p>This is your first time logging in so let me show you around.</p>
        <p className="prompt">
          Click the "<span>X</span>" button once you are ready to begin.
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;
