import React from "react";
import "./ChargePage.css";

const ChargePage = () => {
  return (
    <div className="ChargePage-wrapper">
      <div className="ChargePage-title">Point Charge</div>
      <div className="ChargePage-container">
        <input
          className="ChargePage-container-input"
          placeholder="포인트"
        ></input>
        <button className="ChargePage-container-button">충전</button>
      </div>
    </div>
  );
};

export default ChargePage;
