import React from "react";
import { connect } from "react-redux";
import "./MainPage.css";

// 상품 목록을 추가하는 리듀서를 가져옴
const MainPage = ({ productAdd }) => {
  return (
    <div className="MainPage-wrapper">
      <div className="MainPage-container">
        {productAdd.map((product) => (
          <div className="MainPage-item" key={product.id}>
            <img
              className="MainPage-item-img"
              src={product.image}
              alt={product.image}
            ></img>
            <div className="MainPage-item-footer">
              <div>
                <div className="MainPage-item-name">{product.name}</div>
                <div className="MainPage-item-price">{product.price}</div>
              </div>

              <button className="MainPage-item-button">BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// store에 저장된 state를 props로 가져옴
const mapStateToProps = (state) => {
  return {
    // 스토어에서 상품 목록 추가 리듀서의 데이터만 가져온다
    productAdd: state.productAdd,
  };
};

//
export default connect(mapStateToProps)(MainPage);
