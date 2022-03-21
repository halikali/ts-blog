import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { exampleAction } from "store/actions/exampleAction";
import routes from "routes";
import "./App.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.page} key={route.name} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
