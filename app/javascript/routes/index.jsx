import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Favorites from "../components/Favorites"

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
        <Favorites />
      </Switch>
    </Router>
  );
};

export default RouterComponent;

// each route must be mapped within a different Route tag. 
// the path parameter must match the URI of each route endpoint
// the component param (exact component) indicates the component to which the React Router should redirect the request 