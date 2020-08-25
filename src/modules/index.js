import { combineReducers } from "redux";
import productAdd from "./productAdd";
import saleAdd from "./saleAdd";

// 리듀서를 통합합니다
const rootReducer = combineReducers({
  productAdd,
  saleAdd,
});
export default rootReducer;
