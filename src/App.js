import { Suspense } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import routes from "./routes";
import { Container } from "react-bootstrap";
// {connect}
// экшены и редюсеры

// import { getCocktail } from './services/cocktailsApi'
// getCocktail('margarita').then((d) => console.log(d))

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback="Waiting...">
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default withRouter(App);
