import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
    <div>
    <center>
    <h1>
    Something big is coming...
    </h1>
    </center>
    </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
