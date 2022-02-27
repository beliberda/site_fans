import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageIndex from "../pages/page_index";
import PageReg from "../pages/page_reg";

import "./reset.css";
import "./App.css";
import PageAddProjectData from "../pages/page_add_project_data";
import PageAddProjectSolutions from "../pages/page_add_project_solutions";
import PageAddProjectSpecification from "../pages/page_add_project_specification";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>

          <Route path="/add_project_specification">
            <PageAddProjectSpecification />
          </Route>

          <Route path="/add_project_solutions">
            <PageAddProjectSolutions />
          </Route>

          <Route path="/add_project_data">
            <PageAddProjectData />
          </Route>

          <Route path="/reg">
            <PageReg />
          </Route>

          <Route path="/">
            <PageIndex />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
