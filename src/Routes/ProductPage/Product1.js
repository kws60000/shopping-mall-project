import React, { useState } from "react";
import { connect } from "react-redux";
import { cartInsert } from "../../modules/cartAdd";

const Product1 = ({ onClickCartAdd }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [many, setMany] = useState("");

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };
  const onChangeNumber = (e) => {
    setMany(e.target.value);
  };

  return (
    <div className="ProductPage-wrapper">
      <div className="ProductPage-left">
        <img
          src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F"
          alt="Product"
        ></img>
      </div>
      <div className="ProductPage-Right">
        <div className="ProductPage-name">
          <div className="ProductPage-Right-category">상품명</div>
          <div className="ProductPage-category-text">플라이 슬림 컷팅 진</div>
        </div>
        <div className="ProductPage-price">
          <div className="ProductPage-Right-category">판매가</div>
          <div className="ProductPage-category-text">30000</div>
        </div>
        <div className="ProductPage-color">
          <div className="ProductPage-Right-category">컬러</div>
          <div>
            <select
              name="color"
              className="color-select"
              value={color}
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
            <select
              name="size"
              className="size-select"
              value={size}
              onChange={onChangeSize}
            >
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
              value={many}
              onChange={onChangeNumber}
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
              onClickCartAdd({ color, size, many });
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
  return { cartAdd: state.cartAdd };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickCartAdd: ({ color, size, many }) =>
      dispatch(cartInsert({ color, size, many })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product1);
