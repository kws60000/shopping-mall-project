const CARTADD = "cartAdd/CARTADD";

export const cartInsert = ({ color, size, many }) => ({
  type: CARTADD,
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
          size: action.size,
          color: action.color,
          many: action.many,
        },
      ];

    default:
      return state;
  }
}
