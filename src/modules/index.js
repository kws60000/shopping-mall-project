import { combineReducers } from "redux";
import productAdd from "./productAdd";
import saleAdd from "./saleAdd";
import pointAdd from "./pointAdd";

// 리듀서를 통합합니다
const rootReducer = combineReducers({
  productAdd,
  saleAdd,
  pointAdd,
});
export default rootReducer;
