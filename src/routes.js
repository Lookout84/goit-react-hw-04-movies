import { lazy } from "react";
import { v4 as uuid } from "uuid";

const routes = [
  {
    key: uuid(),
    exact: true,
    path: "/",
    component: lazy(() => import("./pages/HomePage/HomePage")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/movies",
    component: lazy(() => import("./pages/MoviesPage/MoviesPage")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/movies/:movieId",
    component: lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/movies/:movieId/cast",
    component: lazy(() => import("./components/Cast/Cast")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/movies/:movieId/reviews",
    component: lazy(() => import("./components/Reviews/Reviews")),
  },
];
export default routes;
