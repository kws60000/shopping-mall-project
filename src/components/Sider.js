import React from "react";
import { Link } from "react-router-dom";
import "./Sider.css";
import { connect } from "react-redux";

const Sider = ({ pointAdd }) => {
  return (
    <div className="Sider-wrap">
      <div className="Sider-title">
        <Link to="/" className="Sider-title-link">
          <div className="Sider-title-name">Daily Man</div>
        </Link>
      </div>
      <div className="Sider-content">
        <div className="Sider-personal">
          <div>LOGOUT</div>
          <div>MY PAGE</div>
          <div>CART</div>
        </div>
        {pointAdd.map((my) => (
          <div className="Sider-personal-point">POINT: {my.point}</div>
        ))}

        <div className="Sider-product-category">
          <ul>
            <li>ABOUT</li>
            <li>BEST50</li>
            <li>NEW PRODUCT</li>
            <li>OUTER</li>
            <li>TOP</li>
            <li>SHIRTS</li>
            <li>PANTS</li>
            <li>SUIT</li>
            <li>SHOES</li>
            <li>BAG & ACC</li>
            <li>SALE</li>
            <li>CodI Set</li>
            <li>Promotion</li>
          </ul>
        </div>
        <div className="Sider-additional-category">
          <ul>
            <li>NOTICE</li>
            <li>EVENT</li>
            <li>REVIEW</li>
            <li>Q & A</li>
            <li>코디북</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pointAdd: state.pointAdd,
});

export default connect(mapStateToProps)(Sider);
