import React from "react";

const Product5 = () => {
  return (
    <div>
      <div className="ProductPage-wrapper">
        <div className="ProductPage-left">
          <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/117726508_659947221361642_5676228711017363031_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=ZtCFyYJOH_MAX-wv-70&_nc_ht=scontent-frx5-1.cdninstagram.com&oh=3c4e58ea544773405b9439e6bed4e4a6&oe=5F61A88B"></img>
        </div>
        <div className="ProductPage-Right">
          <div className="ProductPage-name">
            <div className="ProductPage-Right-category">상품명</div>
            <div className="ProductPage-category-text">
              오버핏 거즈 린넨 셔츠
            </div>
          </div>
          <div className="ProductPage-price">
            <div className="ProductPage-Right-category">판매가</div>
            <div className="ProductPage-category-text">24000</div>
          </div>
          <div className="ProductPage-color">
            <div className="ProductPage-Right-category">컬러</div>
            <div>
              <select name="color" className="color-select">
                <option value="">[필수] 색상을 선택하세요</option>
                <option value="진청">그레이</option>
                <option value="연청">다크 블루</option>
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

export default Product5;
