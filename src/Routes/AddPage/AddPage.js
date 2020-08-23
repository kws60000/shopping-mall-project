import React, { useState } from "react";
import "./AddPage.css";

const AddPage = () => {
  const [img64, setImg64] = useState(null);
  const onChangeImg = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImg64(base64.toString());
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
        <img alt="" src={img64} className="AddPage-container-img"></img>

        <div>
          <input
            className="AddPage-container-text"
            placeholder="상품 이름"
          ></input>
        </div>
        <div>
          <input
            className="AddPage-container-text"
            placeholder="판매 가격"
          ></input>
        </div>

        <button className="AddPage-container-button">Enroll</button>
      </div>
    </div>
  );
};

export default AddPage;
