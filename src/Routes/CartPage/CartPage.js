import React from "react";
import "./CartPage.css";
import { connect } from "react-redux";

const CartPage = ({ cartAdd }) => {
  return (
    <div className="CartPage-wrapper">
      <div className="CartPage-header">Cart</div>
      <table className="CartPage-container">
        <tr className="CartPage-container-category">
          <th>
            <input type="checkbox" />
          </th>
          <th>이미지</th>
          <th>상품정보</th>
          <th>판매가</th>
          <th>수량</th>
          <th>합계</th>
        </tr>
        {cartAdd.map((product) => (
          <tr className="CartPage-container-content">
            <td className="CartPage-content-checkbox">
              <input type="checkbox"></input>
            </td>
            <td className="CartPage-content-image">
              <img src={product.image} alt="Product"></img>
            </td>
            <td className="CartPage-content-name">
              <div className="CartPage-content-productName">{product.name}</div>
              <div className="CartPage-content-option">
                [옵션:
                <div className="CartPage-content-color">{product.color}</div>/
                <div className="CartPage-content-size">{product.size}</div>]
              </div>
            </td>
            <td className="CartPage-content-price">{product.price}</td>
            <td className="CartPage-content-many">{product.many}</td>
            <td className="CartPage-content-total">60000</td>
          </tr>
        ))}

        <tr className="CartPage-container-sum">
          <td colSpan="6">60000</td>
        </tr>
      </table>
      <div className="CartPage-footer">
        <button className="CartPage-footer-order">선택상품주문</button>
        <button className="CartPage-footer-delete">선택상품삭제</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartAdd: state.cartAdd };
};

export default connect(mapStateToProps)(CartPage);
