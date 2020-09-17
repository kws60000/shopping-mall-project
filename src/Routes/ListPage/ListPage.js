import React from "react";

import { connect } from "react-redux";
import "./ListPage.css";

const ListPage = ({ saleAdd }) => {
  return (
    <div className="ListPage-wrapper">
      <div className="ListPage-title">Purchase List</div>
      <div className="ListPage-container">
        <div className="ListPage-container-category">
          <div className="ListPage-container-category-name">Name</div>
          <div className="ListPage-container-category-price">Price</div>
        </div>
      </div>
      {saleAdd.map((product) => (
        <div className="ListPage-container-content">
          <img
            className="ListPage-container-content-img"
            alt="ListPage"
            src={product.image}
          ></img>
          <div className="ListPage-container-content-name">{product.name}</div>
          <div className="ListPage-container-content-price">
            {product.price}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  saleAdd: state.saleAdd,
});

export default connect(mapStateToProps)(ListPage);
