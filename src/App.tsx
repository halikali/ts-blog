import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import routes from "routes";
import "./App.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import MobileNavbar from "components/Mobile-navbar";

const App = () => {
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

      <MobileNavbar />
    </>
  );
};

export default App;
