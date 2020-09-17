const SALEPRODUCTADD = "saleAdd/SALEPRODUCTADD";

export const saleProductAdd = ({ name, price, image }) => ({
  type: SALEPRODUCTADD,
  name,
  price,
  image,
});

// store에 저장할 기본값 state 설정
const initialState = [
  {
    id: 1,
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F",
    name: "플라이 슬림 컷팅 진 ",
    price: "30,000원",
  },
  {
    id: 2,
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117405195_300900951137178_2554164909463545302_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=qAQctj5Ic8MAX8zqymo&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=bc0b262233bf9aa2b70ab58a5fdf782f&oe=5F638233",
    name: "린넨 단가라 박스 티셔츠 ",
    price: "25,000원",
  },
  {
    id: 3,
    image:
      "https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/118076809_171370054618434_1136582570905606837_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=wBgXbLpAk0gAX9DJt8B&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=4f74d9d57a2d95c4ec40a0e96929fd30&oe=5F64B02D",
    name: "애쉬 거즈 코튼 셔츠 ",
    price: "27,000원",
  },
];

export default function saleAdd(state = initialState, action) {
  switch (action.type) {
    case SALEPRODUCTADD:
      return [
        ...state,
        {
          name: action.name,
          price: action.price,
          image: action.image,
        },
      ];
    default:
      return state;
  }
}
