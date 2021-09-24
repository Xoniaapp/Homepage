import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Pricing,
  Error,
  Terms,
  Privacy,
  Team
} from "./pages/index"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/xtra">
          <Pricing />
        </Route>

        <Route exact path="/terms">
          <Terms />
        </Route>

        <Route exact path="/privacy">
          <Privacy />
        </Route>

        <Route exact path="/team">
          <Team />
        </Route>

        <Route exact path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
