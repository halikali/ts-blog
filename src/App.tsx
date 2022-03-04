import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { exampleAction } from "store/actions/exampleAction";
import routes from "routes";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, []);

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.page} key={route.name} />
      ))}
    </Routes>
  );
};

export default App;
