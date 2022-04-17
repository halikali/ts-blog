const initialState = {
  data: [],
  loading: false,
  error: null,
};

const GetPostByCategoryReducer = (state = initialState, action: any) => {
  console.log("GetPostByCategoryReducer =>", action);
  switch (action.type) {
    case "GET_POST_BY_CATEGORY_REQUEST":
      return { ...state, loading: true };
    case "GET_POST_BY_CATEGORY_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_POST_BY_CATEGORY_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "RESET_POSTS":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default GetPostByCategoryReducer;
