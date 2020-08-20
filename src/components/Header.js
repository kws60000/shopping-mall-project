import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-wrapper">
      <div className="Header-category">
        <li>홈</li>
        <li>포인트 충전</li>
        <li>구매 내역</li>
        <li>상품 등록</li>
        <li>장바구니</li>
        <li>고객센터</li>
        <li>이벤트</li>
        <li>리뷰</li>
      </div>
    </div>
  );
};

export default Header;
