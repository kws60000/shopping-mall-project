import React from "react";
import "./CartPage.css";
import { connect } from "react-redux";
import { toggleCheck } from "../../modules/cartAdd";
import { cartDelete } from "../../modules/cartAdd";

const CartPage = ({ cartAdd, onClickToggle, onClickDelete }) => {
  const completed = cartAdd.map((cart) => cart.completed);

  const completedDelete = () => {
    onClickDelete(completed);
  };

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
              <input
                type="checkbox"
                onClick={() => {
                  onClickToggle(cart.id);
                }}
              ></input>
            </td>
            <td className="CartPage-content-image">
              <img src={cart.image} alt="Product"></img>
            </td>
            <td className="CartPage-content-name">
              <div className="CartPage-content-productName">{cart.name}</div>
              <div className="CartPage-content-option">
                [옵션:
                <div className="CartPage-content-color">{cart.color}</div>/
                <div className="CartPage-content-size">{cart.size}</div>]
              </div>
            </td>
            <td className="CartPage-content-price">{cart.price}</td>
            <td className="CartPage-content-many">{cart.many}</td>
            <td className="CartPage-content-total">{cart.price * cart.many}</td>
          </tr>
        ))}

        <tr className="CartPage-container-sum">
          <td colSpan="6">1000000</td>
        </tr>
      </table>
      <div className="CartPage-footer">
        <div>
          <button className="CartPage-footer-order">선택상품주문</button>

          <button
            className="CartPage-footer-delete"
            onClick={() => {
              completedDelete();
            }}
          >
            선택상품삭제
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartAdd: state.cartAdd };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToggle: (id) => dispatch(toggleCheck(id)),
    onClickDelete: (completed) => dispatch(cartDelete(completed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
