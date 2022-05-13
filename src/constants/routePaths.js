import { lazy } from "react";

const Home = lazy(() => import("@/containers/Home/Home.jsx"));
const Posts = lazy(() => import("@/containers/Posts"));
const routePaths = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/posts",
    exact: true,
    title: "Posts",
    element: <Posts />,
  },
];

export default routePaths;
