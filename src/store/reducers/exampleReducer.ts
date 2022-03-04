const initialState = {
  data: [],
};

const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default exampleReducer;
