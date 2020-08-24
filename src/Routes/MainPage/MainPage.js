import React from "react";
import { connect } from "react-redux";
import "./MainPage.css";

const MainPage = (productAdd) => {
  return (
    <div className="MainPage-wrapper">
      <div className="MainPage-container">
        {productAdd.map((product) => (
          <div className="MainPage-item">
            <img
              className="MainPage-item-img"
              src={product.image}
              alt={product.image}
            ></img>
            <div className="MainPage-item-name">{product.name}</div>
            <div className="MainPage-item-price">{product.price}</div>
          </div>
        ))}

        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">플라이 슬림 컷팅 진</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117405195_300900951137178_2554164909463545302_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=qAQctj5Ic8MAX8zqymo&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=bc0b262233bf9aa2b70ab58a5fdf782f&oe=5F638233"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">린넨 단가라 박스 티셔츠</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/118076809_171370054618434_1136582570905606837_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=wBgXbLpAk0gAX9DJt8B&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=4f74d9d57a2d95c4ec40a0e96929fd30&oe=5F64B02D"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">애쉬 거즈 코튼 셔츠</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://instagram.fcju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117153843_2618271671757450_1942597701969431709_n.jpg?_nc_ht=instagram.fcju1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=SMVAsdPx8fEAX9cmPXh&oh=a6d1a984f6589b299bacffccfce6dd9c&oe=5F686B0E"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">TR 2웨이 오픈 카라 셔츠</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/117726508_659947221361642_5676228711017363031_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=ZtCFyYJOH_MAX-wv-70&_nc_ht=scontent-frx5-1.cdninstagram.com&oh=3c4e58ea544773405b9439e6bed4e4a6&oe=5F61A88B"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">오버핏 거즈 린넨 셔츠</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
        <div className="MainPage-item">
          <img
            className="MainPage-item-img"
            src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/116870891_225795675317320_342931733160931216_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=SIKdkhaYLTwAX87yOaw&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=4cd692705f1986e769f3e8cfd29bb530&oe=5F64FB13"
            alt="Main"
          ></img>
          <div className="MainPage-item-name">린넨면 차이나 체크 셔츠</div>
          <div className="MainPage-item-price">30,000원</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    price: state.price,
    image: state.image,
  };
};

export default connect(mapStateToProps)(MainPage);
