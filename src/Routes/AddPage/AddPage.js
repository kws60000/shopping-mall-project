import React, { useState } from "react";
import "./AddPage.css";
import { connect } from "react-redux";
import { saleAdd } from "../../modules/productAdd";

const AddPage = ({ onClickProductAdd }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeImg = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImage(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="AddPage-wrapper">
      <div className="AddPage-title">Product Enroll</div>
      <div className="AddPage-container">
        <div>
          <input
            className="AddPage-container-file"
            type="file"
            onChange={onChangeImg}
          ></input>
        </div>
        <img alt="" src={image} className="AddPage-container-img"></img>

        <div>
          <input
            className="AddPage-container-text"
            placeholder="상품 이름"
            value={name}
            onChange={onChangeName}
          ></input>
        </div>
        <div>
          <input
            className="AddPage-container-text"
            placeholder="판매 가격"
            value={price}
            onChange={onChangePrice}
          ></input>
        </div>

        <button
          className="AddPage-container-button"
          onClick={() => {
            onClickProductAdd({ name, price, image });
          }}
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productAdd: state.productAdd,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickProductAdd: ({ name, price, image }) =>
    // 상품 목록을 추가하는 액션을 실행함
    dispatch(saleAdd({ name, price, image })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
