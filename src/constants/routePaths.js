import { lazy } from "react";

const routePaths = [
  {
    title: "Home",
    path: "/",
    component: lazy(() => import("@/containers/Home/Home.jsx")),
    exact: true,
  },
  {
    path: "/posts",
    exact: true,
    title: "Posts",
    component: lazy(() => import("@/containers/Posts")),
  },
  {
    title: "id",
    path: "/home/:id",
    component: lazy(() => import("@/containers/Home/Home.jsx")),
    exact: true,
  },
];

export default routePaths;
