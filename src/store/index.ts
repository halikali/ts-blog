import { combineReducers } from "redux";
import GetAllPostsReducer from "./reducers/GetAllPostsReducer";
import GetPostByCategoryReducer from "./reducers/GetPostByCategory";
import GetPostDetailReducer from "./reducers/GetPostDetail";

const rootReducer = combineReducers({
  AllPosts: GetAllPostsReducer,
  Detail: GetPostDetailReducer,
  CategoryPost: GetPostByCategoryReducer,
});

export default rootReducer;
