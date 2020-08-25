import React from "react";
import { connect } from "react-redux";
import "./MainPage.css";
import { saleDelete } from "../../modules/productAdd";

// 상품 목록을 추가하는 리듀서를 가져옴
const MainPage = ({ productAdd, handleDeleteProduct }) => {
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

              <button
                className="MainPage-item-button"
                onClick={() => handleDeleteProduct(product.id)}
              >
                BUY NOW
              </button>
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

// store에서 액션을 가져오고, id를 받은 액션이 결과값을 반환하는 함수를 만듦
const mapDispatchToProp = (dispatch) => ({
  handleDeleteProduct: (id) => dispatch(saleDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProp)(MainPage);
