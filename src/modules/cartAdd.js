const CARTADD = "cartAdd/CARTADD";
const CARTTOGGLE = "cartAdd/CARTTOGGLE";
const CARTDELETE = "cartAdd/CARTDELETE";

export const cartInsert = ({ name, image, price, color, size, many }) => ({
  type: CARTADD,
  name,
  image,
  price,
  color,
  size,
  many,
});

export const toggleCheck = (id) => ({
  type: CARTTOGGLE,
  id,
});
// 장바구니의 체크박스를 클릭 시 id 값을 받는 액션 생성 함수

export const cartDelete = ({ completed }) => ({
  type: CARTDELETE,
  completed,
});
//장바구니에서 체크된 상품만 제거하는 액션 생성 함수

let id = 1;

export default function cartAdd(state = [], action) {
  switch (action.type) {
    case CARTADD:
      return [
        ...state,
        {
          id: id++,
          name: action.name,
          image: action.image,
          price: action.price,
          many: action.many,
          color: action.color,
          size: action.size,
          completed: false,
        },
      ];

    case CARTTOGGLE:
      // 장바구니에서 체크한 상품의 체크상태를 반환하는 액션

      return state.map(
        (product) =>
          product.id === action.id
            ? { ...product, completed: !product.completed }
            : product

        // 체크한 상품의 체크 상태를 반전 / 체크하지 않은 상품은 그대로 유지
      );

    case CARTDELETE:
      const nextState = state.filter((product) => product.completed === false);

      return nextState;

    default:
      return state;
  }
}
