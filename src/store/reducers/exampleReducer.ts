import { IPostAction } from "types/PostTypes";

const initialState = {
  data: [],
  isLoad: false,
  error: null,
};

const exampleReducer = (state = initialState, action: IPostAction) => {
  switch (action.type) {
    case "CREATE_POST_REQUEST":
      return { ...state, isLoad: false };

    case "CREATE_POST_SUCCESS":
      return { ...state, isLoad: true, data: [...state.data, action.payload] };
    case "CREATE_POST_FAILURE":
      return { ...state, isLoad: true, error: action.error };
    default:
      return state;
  }
};

export default exampleReducer;
