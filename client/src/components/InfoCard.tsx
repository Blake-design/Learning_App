import React from "react";

const InfoCard = ({ handleClick, children }: any) => {
  return (
    <div className="info-card">
      <button className="close-button" onClick={handleClick}>
        X
      </button>
      <div className="content">{children}</div>
    </div>
  );
};

export default InfoCard;
