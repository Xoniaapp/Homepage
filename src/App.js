import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Header, Grid, Footer } from "./components/index.js";
import Privacy from "./pages/index.js";

function App() {
  return (
    <Router>
      <Switch>
    <Route exact path="/">
    <Navbar />
    <Header />
    <Grid />
    <Footer />
    </Route>

<Route exact path="/privacy">
<Privacy />
</Route>

      </Switch>
    </Router>
  );
}

export default App;
