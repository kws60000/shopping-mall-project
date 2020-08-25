const SALEPRODUCTADD = "saleAdd/SALEPRODUCTADD";

export const saleProductAdd = ({ name, price, image }) => ({
  type: SALEPRODUCTADD,
  name,
  price,
  image,
});

export default function saleAdd(state = [], action) {
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
