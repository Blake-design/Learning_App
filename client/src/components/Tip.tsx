import React from "react";

const Tip = ({ arrow, visible, children }: any) => {
  return (
    <div className={visible ? "title" : "title hidden"}>
      <span className={`arrow ${arrow}`}>&rarr;</span>
      <div className="title-section">{children}</div>
    </div>
  );
};

export default Tip;
