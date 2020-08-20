import React from "react";
import "./Sider.css";

const Sider = () => {
  return (
    <div className="Sider-wrap">
      <div className="Sider-title">
        <div className="Sider-title-name">Daily Men</div>
      </div>
      <div className="Sider-content">
        <div className="Sider-personal">
          <div>LOGIN</div>
          <div>MY PAGE</div>
          <div>CART</div>
        </div>
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
            <li>Codi Set</li>
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

export default Sider;
