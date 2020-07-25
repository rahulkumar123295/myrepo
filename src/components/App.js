import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login_Logout_Screen from "./Login_Logout_Screen";
import Registration from "./Registration";
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
              <Route path="/" exact component={Login_Logout_Screen} />
              <Route path="/registration" exact component={Registration} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
