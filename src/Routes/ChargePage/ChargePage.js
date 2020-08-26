import React, { useState } from "react";
import { connect } from "react-redux";
import { pointPlus } from "../../modules/pointAdd";
import "./ChargePage.css";

const ChargePage = ({ pointAdd, onClickPointAdd }) => {
  const [pointUp, setPointUp] = useState("");
  const onChangePoint = (e) => {
    setPointUp(e.target.value);
  };
  return (
    <div className="ChargePage-wrapper">
      <div className="ChargePage-title">Point Charge</div>
      <div className="ChargePage-container">
        <input
          className="ChargePage-container-input"
          placeholder="포인트"
          value={pointUp}
          onChange={onChangePoint}
        ></input>
        <button
          className="ChargePage-container-button"
          onClick={() => {
            onClickPointAdd(pointUp);
          }}
        >
          충전
        </button>

        {pointAdd.map(({ point }) => (
          <div>{point}</div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pointAdd: state.pointAdd,
});
const mapDispatchToProps = (dispatch) => ({
  onClickPointAdd: (point) => dispatch(pointPlus(point)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChargePage);
