import { lazy } from "react";
import { v4 as uuid } from "uuid";

const routes = [
  {
    key: uuid(),
    exact: true,
    path: "/",
    // path: `${match.url}`,
    component: lazy(() => import("./pages/HomePage/HomePage")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/movies",
    component: lazy(() => import("./pages/MoviesPage/MoviesPage")),
  },
  // {
  //   key: uuid(),
  //   exact: true,
  //   path: "/contacts",
  //   component: lazy(() => import("./pages/Contacts/Contacts")),
  // },
];
export default routes;
