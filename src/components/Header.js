import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-wrapper">
      <div className="Header-category">
        <Link to="/" className="Header-category-link">
          <div className="Header-category-list">홈</div>
        </Link>
        <Link to="/Charge" className="Header-category-link">
          <div className="Header-category-list">포인트 충전</div>
        </Link>
        <Link to="/List" className="Header-category-link">
          <div className="Header-category-list">구매 내역</div>
        </Link>
        <Link to="/Add" className="Header-category-link">
          <div className="Header-category-list">상품 등록</div>
        </Link>
        <Link to="/cart" className="Header-category-link">
          <div className="Header-category-list">장바구니</div>
        </Link>

        <div className="Header-category-list">고객센터</div>
        <div className="Header-category-list">이벤트</div>
        <div className="Header-category-list">리뷰</div>
      </div>
    </div>
  );
};

export default Header;
