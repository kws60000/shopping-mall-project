import React from "react";

const Product3 = () => {
  return (
    <div>
      <div className="ProductPage-wrapper">
        <div className="ProductPage-left">
          <img src="https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/118076809_171370054618434_1136582570905606837_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=wBgXbLpAk0gAX9DJt8B&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=4f74d9d57a2d95c4ec40a0e96929fd30&oe=5F64B02D"></img>
        </div>
        <div className="ProductPage-Right">
          <div className="ProductPage-name">
            <div className="ProductPage-Right-category">상품명</div>
            <div className="ProductPage-category-text">애쉬 거즈 코튼 셔츠</div>
          </div>
          <div className="ProductPage-price">
            <div className="ProductPage-Right-category">판매가</div>
            <div className="ProductPage-category-text">27000</div>
          </div>
          <div className="ProductPage-color">
            <div className="ProductPage-Right-category">컬러</div>
            <div>
              <select name="color" className="color-select">
                <option value="">[필수] 색상을 선택하세요</option>
                <option value="진청">블루</option>
                <option value="연청">옐로우</option>
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

export default Product3;
