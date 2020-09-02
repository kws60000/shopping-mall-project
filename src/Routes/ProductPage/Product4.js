import React from "react";

const Product4 = () => {
  return (
    <div>
      <div className="ProductPage-wrapper">
        <div className="ProductPage-left">
          <img src="https://instagram.fcju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117153843_2618271671757450_1942597701969431709_n.jpg?_nc_ht=instagram.fcju1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=SMVAsdPx8fEAX9cmPXh&oh=a6d1a984f6589b299bacffccfce6dd9c&oe=5F686B0E"></img>
        </div>
        <div className="ProductPage-Right">
          <div className="ProductPage-name">
            <div className="ProductPage-Right-category">상품명</div>
            <div className="ProductPage-category-text">
              TR 2웨이 오픈 카라 셔츠
            </div>
          </div>
          <div className="ProductPage-price">
            <div className="ProductPage-Right-category">판매가</div>
            <div className="ProductPage-category-text">35000</div>
          </div>
          <div className="ProductPage-color">
            <div className="ProductPage-Right-category">컬러</div>
            <div>
              <select name="color" className="color-select">
                <option value="">[필수] 색상을 선택하세요</option>
                <option value="진청">블랙</option>
                <option value="연청">화이트</option>
              </select>
            </div>
          </div>
          <div className="ProductPage-size">
            <div className="ProductPage-Right-category">사이즈</div>
            <div>
              <select name="size" className="size-select">
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
              />
            </div>
          </div>
          <div className="ProductPage-Buy">
            <button className="ProductPage-Buy-Button">BUY NOW</button>
          </div>
          <div className="ProductPage-Pocket">
            <button className="ProductPage-Pocket-Button">CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product4;
