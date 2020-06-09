import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Screen from "./Screen";
import Transaction from "./Transaction";
import Capital from "./Capital";
import history from "../history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Screen} />
              <Route path="/transaction" exact component={Transaction} />
              <Route path="/capital" exact component={Capital} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;