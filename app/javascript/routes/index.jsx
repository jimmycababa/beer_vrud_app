import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;

// each route must be mapped within a different Route tag. 
// the path parameter must match the URI of each route endpoint
// the component param (exact component) indicates the component to which the React Router should redirect the request 