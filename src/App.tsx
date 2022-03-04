import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { exampleAction } from "store/actions/exampleAction";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, []);
  return <div></div>;
};

export default App;
