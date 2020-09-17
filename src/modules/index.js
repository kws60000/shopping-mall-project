import { combineReducers } from "redux";
import productAdd from "./productAdd";
import saleAdd from "./saleAdd";
import pointAdd from "./pointAdd";
import cartAdd from "./cartAdd";

// 리듀서를 통합합니다
const rootReducer = combineReducers({
  productAdd,
  saleAdd,
  pointAdd,
  cartAdd,
});
export default rootReducer;
