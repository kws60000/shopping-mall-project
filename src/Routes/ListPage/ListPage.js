import React from "react";
import "./ListPage.css";

const ListPage = () => {
  return (
    <div className="ListPage-wrapper">
      <div className="ListPage-title">Purchase List</div>
      <div className="ListPage-container">
        <div className="ListPage-container-category">
          <div className="ListPage-container-category-name">Name</div>
          <div className="ListPage-container-category-price">Price</div>
        </div>
        <div className="ListPage-container-content">
          <img
            className="ListPage-container-content-img"
            alt="ListPage"
            src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F"
          ></img>
          <div className="ListPage-container-content-name">
            플라이 슬림 컷팅 진
          </div>
          <div className="ListPage-container-content-price">30,000원</div>
        </div>
        <div className="ListPage-container-content">
          <img
            className="ListPage-container-content-img"
            alt="ListPage"
            src="https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/118076809_171370054618434_1136582570905606837_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=wBgXbLpAk0gAX9DJt8B&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=4f74d9d57a2d95c4ec40a0e96929fd30&oe=5F64B02D"
          ></img>
          <div className="ListPage-container-content-name">
            애쉬 거즈 코튼 셔츠
          </div>
          <div className="ListPage-container-content-price">30,000원</div>
        </div>
        <div className="ListPage-container-content">
          <img
            className="ListPage-container-content-img"
            alt="ListPage"
            src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/118154029_1683083388511967_719520518651958381_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=I_rOhiFbt7kAX8ujArQ&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=4c9b457a597bd3ec74c41a51866fc47d&oe=5F682AED"
          ></img>
          <div className="ListPage-container-content-name">겨자 셔츠</div>
          <div className="ListPage-container-content-price">30,000원</div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
