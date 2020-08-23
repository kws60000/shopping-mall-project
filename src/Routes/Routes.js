import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AddPage from "./AddPage/AddPage";
import ChargePage from "./ChargePage/ChargePage";
import ListPage from "./ListPage/ListPage";

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
