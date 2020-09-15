// 액션 타입을 정의
const PRODUCTADD = "productAdd/PRODUCTADD";
const PRODUCTDELETE = "productAdd/PRODUCTDELETE";

// 상품목록을 추가하는 액션 생성함수를 생성
export const saleAdd = ({ price, image, name }) => ({
  type: PRODUCTADD,
  image,
  name,
  price,
});

// 상품목록을 제거하는 액션 생성함수를 생성
export const saleDelete = (id, price) => ({
  type: PRODUCTDELETE,
  id,
  price,
});

// 추가될 id 값 설정
let id = 7;

// store에 저장할 기본값 state 설정
const initialState = [
  {
    id: 1,
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F",
    name: "플라이 슬림 컷팅 진 ",
    price: 30000,
  },
  {
    id: 2,
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117405195_300900951137178_2554164909463545302_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=qAQctj5Ic8MAX8zqymo&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=bc0b262233bf9aa2b70ab58a5fdf782f&oe=5F638233",
    name: "린넨 단가라 박스 티셔츠 ",
    price: 25000,
  },
  {
    id: 3,
    image:
      "https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/118076809_171370054618434_1136582570905606837_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=wBgXbLpAk0gAX9DJt8B&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=4f74d9d57a2d95c4ec40a0e96929fd30&oe=5F64B02D",
    name: "애쉬 거즈 코튼 셔츠 ",
    price: 27000,
  },
  {
    id: 4,
    image:
      "https://instagram.fcju1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117153843_2618271671757450_1942597701969431709_n.jpg?_nc_ht=instagram.fcju1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=SMVAsdPx8fEAX9cmPXh&oh=a6d1a984f6589b299bacffccfce6dd9c&oe=5F686B0E",
    name: "TR 2웨이 오픈 카라 셔츠 ",
    price: 35000,
  },
  {
    id: 5,
    image:
      "https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/117726508_659947221361642_5676228711017363031_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=ZtCFyYJOH_MAX-wv-70&_nc_ht=scontent-frx5-1.cdninstagram.com&oh=3c4e58ea544773405b9439e6bed4e4a6&oe=5F61A88B",
    name: "오버핏 거즈 린넨 셔츠 ",
    price: 24000,
  },
  {
    id: 6,
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/116870891_225795675317320_342931733160931216_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=SIKdkhaYLTwAX87yOaw&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=4cd692705f1986e769f3e8cfd29bb530&oe=5F64FB13",
    name: "린넨면 차이나 체크 셔츠 ",
    price: "26000",
  },
];

// 액션에 따른 결과값을 반환
export default function productAdd(state = initialState, action) {
  switch (action.type) {
    // 상품 등록 액션
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
    // 등록 상품 제거 액션
    case PRODUCTDELETE:
      const nextState = state.filter((product) => product.id !== action.id);

      return nextState;
    // 반환할 초기값
    default:
      return state;
  }
}
