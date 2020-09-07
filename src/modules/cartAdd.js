const CARTADD = "cartAdd/CARTADD";

const initialState = [
  {
    id: 1,
    name: "플라이 슬림 컷팅 진",
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F",
    price: "30000",
    size: "L",
    color: "진청",
    many: "2",
  },
];

export default function cartAdd(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
