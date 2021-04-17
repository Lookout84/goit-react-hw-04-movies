import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import addRoutes from "../addRoutes";
import { withRouter } from "react-router-dom";

const RoutesDetalis = ({ match }) => {
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
