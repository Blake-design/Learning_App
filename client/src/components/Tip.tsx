import React from "react";

const Tip = ({ arrow, children }: any) => {
  return (
    <div className="tip">
      <span className={`arrow ${arrow}`}>&rarr;</span>
      <div className="title-section">{children}</div>
    </div>
  );
};

export default Tip;
