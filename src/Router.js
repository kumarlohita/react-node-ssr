import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import Products from "./screens/Products";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
