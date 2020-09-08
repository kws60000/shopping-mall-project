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
        {cartAdd.map((cart) => (
          <tr className="CartPage-container-content" key={cart.id}>
            <td className="CartPage-content-checkbox">
              <input type="checkbox"></input>
            </td>
            <td className="CartPage-content-image">
              <img
                src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F"
                alt="Product"
              ></img>
            </td>
            <td className="CartPage-content-name">
              <div className="CartPage-content-productName">
                플라이 슬림 컷팅 진
              </div>
              <div className="CartPage-content-option">
                [옵션:
                <div className="CartPage-content-color">{cart.color}</div>/
                <div className="CartPage-content-size">{cart.size}</div>]
              </div>
            </td>
            <td className="CartPage-content-price">30000</td>
            <td className="CartPage-content-many">{cart.many}</td>
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
