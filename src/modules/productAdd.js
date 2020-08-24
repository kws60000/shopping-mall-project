import img1 from "../assets/add1.jpg";
export const PRODUCTADD = "productAdd/PRODUCTADD";
//액션 타입을 정의

let id = 1;
export const saleAdd = ({ price, image, name }) => ({
  type: PRODUCTADD,
  image,
  name,
  price,
});
// 상품목록을 추가하는 액션 생성함수를 생성

const initialState = [
  {
    image: img1,
    name: "20 F/W 내셔널 셔츠 ",
    price: "25,000",
  },
];
// 초기값 정의

export default function productAdd(state = initialState, action) {
  switch (action.type) {
    case PRODUCTADD:
      return [
        ...state,
        {
          id: id++,
          name: action.name,
          price: action.price,
          image: action.image,
        },
      ];

    default:
      return state;
  }
}
