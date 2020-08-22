import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import ChargePage from "./pages/ChargePage";
import ListPage from "./pages/ListPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Add" component={AddPage} />
      <Route path="/Charge" component={ChargePage} />
      <Route path="/List" component={ListPage} />
    </Switch>
  );
};

export default Routes;
