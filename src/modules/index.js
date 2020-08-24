import { combineReducers } from "redux";
import productAdd from "./productAdd";

// 리듀서를 통합합니다
const rootReducer = combineReducers({
  productAdd,
});
export default rootReducer;
