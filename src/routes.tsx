import CreatePostPage from "pages/CreatePostPage";
import DetailPage from "pages/Detail-page/DetailPage";
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
  {
    path: "/create-post",
    page: <CreatePostPage />,
    name: "createPost",
  },
];

export default routes;
