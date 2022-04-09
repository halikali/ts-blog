const initialState = {
  data: {},
  error: null,
  isLoad: false,
};

const GetPostDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_POST_DETAIL_REQUEST":
      return { ...state, isLoad: false };

    case "GET_POST_DETAIL_SUCCESS":
      return { ...state, isLoad: true, data: action.payload };

    case "GET_POST_DETAIL_FAILURE":
      return { ...state, isLoad: true, error: action.error };
    case "CLEAR_POST_DETAIL":
      return { ...state, isLoad: false, data: {} };
    default:
      return state;
  }
};

export default GetPostDetailReducer;
