import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";

const routes = [
  {
    path: "/",
    page: <HomePage />,
    name: "homePage",
  },
  {
    path: "/details",
    page: <DetailPage />,
    name: "detailPage",
  },
];

export default routes;
