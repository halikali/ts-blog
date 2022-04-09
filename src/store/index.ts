import { combineReducers } from "redux";
import GetAllPostsReducer from "./reducers/GetAllPostsReducer";
import GetPostDetailReducer from "./reducers/GetPostDetail";

const rootReducer = combineReducers({
  AllPosts: GetAllPostsReducer,
  Detail: GetPostDetailReducer,
});

export default rootReducer;
