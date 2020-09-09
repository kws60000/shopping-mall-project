import React, { useState } from "react";
import { connect } from "react-redux";
import { cartInsert } from "../../modules/cartAdd";

const Product1 = ({ onClickCartAdd, productAdd }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [many, setMany] = useState("");

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };
  const onChangeMany = (e) => {
    setMany(e.target.value);
  };

  const name = productAdd.map((product) => product.name)[0];
  const image = productAdd.map((product) => product.image)[0];
  const price = productAdd.map((product) => product.price)[0];

  const cartAdd = () => {
    if (color === "") {
      alert("색상을 선택해주세요");
    } else if (size === "") {
      alert("사이즈를 선택해주세요");
    } else if (many === "") {
      alert("수량을 선택해주세요");
    } else {
      onClickCartAdd({ name, image, price, color, size, many });
    }
  };

  // productAdd 리듀서의 초깃값 중 [0]번 째 index의 name, image, price를 가져옵니다

  return (
    <div className="ProductPage-wrapper">
      <div className="ProductPage-left">
        <img src={image} alt="Product"></img>
      </div>
      <div className="ProductPage-Right">
        <div className="ProductPage-name">
          <div className="ProductPage-Right-category">상품명</div>
          <div className="ProductPage-category-text">{name}</div>
        </div>
        <div className="ProductPage-price">
          <div className="ProductPage-Right-category">판매가</div>
          <div className="ProductPage-category-text">{price}</div>
        </div>
        <div className="ProductPage-color">
          <div className="ProductPage-Right-category">컬러</div>
          <div>
            <select
              name="color"
              className="color-select"
              onChange={onChangeColor}
            >
              <option value="">[필수] 색상을 선택하세요</option>
              <option value="진청">진청</option>
              <option value="연청">연청</option>
            </select>
          </div>
        </div>
        <div className="ProductPage-size">
          <div className="ProductPage-Right-category">사이즈</div>
          <div>
            <select name="size" className="size-select" onChange={onChangeSize}>
              <option value="">[필수] 사이즈를 선택하세요</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </div>
        <div className="ProductPage-many">
          <div className="ProductPage-Right-category">수량</div>
          <div>
            <input
              type="number"
              className="many-input"
              placeholder="수량을 선택하세요"
              onChange={onChangeMany}
            />
          </div>
        </div>
        <div className="ProductPage-Buy">
          <button className="ProductPage-Buy-Button">BUY NOW</button>
        </div>
        <div className="ProductPage-Pocket">
          <button
            className="ProductPage-Pocket-Button"
            onClick={() => {
              cartAdd();
            }}
          >
            CART
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartAdd: state.cartAdd,
    productAdd: state.productAdd,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickCartAdd: ({ name, image, price, color, size, many }) =>
      dispatch(cartInsert({ name, image, price, color, size, many })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product1);
