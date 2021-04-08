import { lazy } from "react";

const addRoutes = [
  {
    path: "/cast",
    url: "/cast",
    name: "Cast",
    exact: true,
    component: lazy(() =>
      import("./components/Cast/Cast" /* webpackChunkName: "Cast" */)
    ),
  },
  {
    path: "/reviews",
    url: "/reviews",
    name: "Reviews",
    exact: true,
    component: lazy(() =>
      import("./components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
    ),
  },
];

export default addRoutes;
