export const exampleAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: "EXAMPLE_ACTION",
      payload: "example payload",
    });
  };
};
