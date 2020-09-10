import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AddPage from "./AddPage/AddPage";
import ChargePage from "./ChargePage/ChargePage";
import ListPage from "./ListPage/ListPage";
import ProductRoute from "./ProductPage/ProductRoute";
import CartPage from "./CartPage/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Add" component={AddPage} />
      <Route path="/Charge" component={ChargePage} />
      <Route path="/List" component={ListPage} />
      <Route path="/Product" component={ProductRoute} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default Routes;
