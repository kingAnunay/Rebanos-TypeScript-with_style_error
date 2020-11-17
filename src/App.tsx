import * as React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import ToDo from "./ToDo";
import Form from "./Form";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {/* <Header/> */}
          <Form />
        </Route>
      </Switch>
      <Switch>
        <Route path="/to-do">
          <Header />
          <ToDo />
        </Route>
      </Switch>
    </Router>
  );
}
