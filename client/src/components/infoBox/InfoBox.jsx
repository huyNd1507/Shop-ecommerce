import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ title, count, icon, Cardclass }) => {
  return (
    <div className={`info-box ${Cardclass}`}>
      <h4>{title}</h4>
      <span>
        <h3>{count}</h3>
        {icon}
      </span>
    </div>
  );
};

export default InfoBox;
