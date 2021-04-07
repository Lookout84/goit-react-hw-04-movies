import addRoutes from "../addRoutes";
import { withRouter } from "react-router-dom";

import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import Spinner from "../../components/Spinner";

const RoutesDetalis = ({ match, ...props }) => {
  return (
    <Suspense fallback="Waiting...">
      <Switch>
        {addRoutes.map(({ path, component, exact, url }) => (
          <Route
            key={path}
            path={`${match.url}${url}`}
            exact={exact}
            component={component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default withRouter(RoutesDetalis);
