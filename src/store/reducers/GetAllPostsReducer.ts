const initialState = {
  data: [],
  error: null,
  isLoad: false,
};

const GetAllPostsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ALL_POSTS_REQUEST":
      return { ...state, isLoad: false };
    case "GET_ALL_POSTS_SUCCESS":
      return { ...state, isLoad: true, data: action.payload };
    case "GET_ALL_POSTS_FAILURE":
      return { ...state, isLoad: true, error: action.error };
    default:
      return state;
  }
};

export default GetAllPostsReducer;
