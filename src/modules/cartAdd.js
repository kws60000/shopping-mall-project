const CARTADD = "cartAdd/CARTADD";

export const cartInsert = ({ name, image, price, color, size, many }) => ({
  type: CARTADD,
  name,
  image,
  price,
  color,
  size,
  many,
});

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
          color: action.color,
          size: action.size,
          many: action.many,
        },
      ];

    default:
      return state;
  }
}
