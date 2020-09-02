import React from "react";

const Product6 = () => {
  return (
    <div>
      <div className="ProductPage-wrapper">
        <div className="ProductPage-left">
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/116870891_225795675317320_342931733160931216_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=SIKdkhaYLTwAX87yOaw&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=4cd692705f1986e769f3e8cfd29bb530&oe=5F64FB13"></img>
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
              <select name="color" className="color-select">
                <option value="">[필수] 색상을 선택하세요</option>
                <option value="진청">화이트 & 브라운</option>
                <option value="연청">블랙 & 그린</option>
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

export default Product6;
