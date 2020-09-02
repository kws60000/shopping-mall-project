import React from "react";

const Product2 = () => {
  return (
    <div>
      <div className="ProductPage-wrapper">
        <div className="ProductPage-left">
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117405195_300900951137178_2554164909463545302_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=qAQctj5Ic8MAX8zqymo&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=bc0b262233bf9aa2b70ab58a5fdf782f&oe=5F638233"></img>
        </div>
        <div className="ProductPage-Right">
          <div className="ProductPage-name">
            <div className="ProductPage-Right-category">상품명</div>
            <div className="ProductPage-category-text">
              린넨 단가라 박스 티셔츠
            </div>
          </div>
          <div className="ProductPage-price">
            <div className="ProductPage-Right-category">판매가</div>
            <div className="ProductPage-category-text">25000</div>
          </div>
          <div className="ProductPage-color">
            <div className="ProductPage-Right-category">컬러</div>
            <div>
              <select name="color" className="color-select">
                <option value="">[필수] 색상을 선택하세요</option>
                <option value="진청">화이트</option>
                <option value="연청">블랙</option>
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

export default Product2;
