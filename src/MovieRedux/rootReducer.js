import MovieStatusReducer from "../MovieRedux/action";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  MovieStatusReducer,
});

export default rootReducer;
