import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { cartInsert } from "../../modules/cartAdd";
import { pointMinus } from "../../modules/pointAdd";

const Product1 = ({ onClickCartAdd, productAdd, onClickPointMinus }) => {
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
  // productAdd 리듀서의 초깃값 중 [0]번 째 index의 name, image, price를 가져옵니다

  const history = useHistory();

  const cartAdd = () => {
    if (color === "") {
      alert("색상을 선택해주세요");
    } else if (size === "") {
      alert("사이즈를 선택해주세요");
    } else if (many === "") {
      alert("수량을 선택해주세요");
    } else {
      onClickCartAdd({ name, image, price, color, size, many });
      // 옵션(색상, 사이즈, 수량)을 선택했을 시 장바구니에 정보를 추가

      const confirmCart = window.confirm(
        "선택하신 상품을 장바구니에 담았습니다\n지금 장바구니를 확인하시겠습니까?"
      );
      // 장바구니로 이동할지 이용자가 확인하는 함수 선언

      if (confirmCart === true) {
        history.push("/cart");
      } else {
        return;
      }

      // Confirm 창에서 동의를 누를 시 장바구니 페이지로 이동
    }

    // 장바구니에 추가를 클릭 시 진행하는 이벤트
  };

  const pointDes = () => {
    if (color === "") {
      alert("색상을 선택해주세요");
    } else if (size === "") {
      alert("사이즈를 선택해주세요");
    } else if (many === "") {
      alert("수량을 선택해주세요");
    } else {
      const confirmBuy = window.confirm(
        `선택하신 상품의 가격은 ${
          price * parseInt(many)
        } 입니다. 구매하시겠습니까?`
      );

      if (confirmBuy === true) {
        onClickPointMinus({ price, many });
      } else {
        return;
      }
    }
  };

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
          <button
            className="ProductPage-Buy-Button"
            onClick={() => {
              pointDes();
            }}
          >
            BUY NOW
          </button>
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
    pointAdd: state.pointAdd,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickCartAdd: ({ name, image, price, color, size, many }) =>
      dispatch(cartInsert({ name, image, price, color, size, many })),
    onClickPointMinus: ({ price, point, many }) =>
      dispatch(pointMinus({ price, point, many })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product1);
