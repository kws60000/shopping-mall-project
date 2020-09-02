import React from "react";
import { Switch, Route } from "react-router-dom";
import "./ProductPage.css";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Product6 from "./Product6";

const ProductRoute = () => {
  return (
    <div>
      <Switch>
        <Route path="/Product/1" component={Product1} />
        <Route path="/Product/2" component={Product2} />
        <Route path="/Product/3" component={Product3} />
        <Route path="/Product/4" component={Product4} />
        <Route path="/Product/5" component={Product5} />
        <Route path="/Product/6" component={Product6} />
      </Switch>
    </div>
  );
};

export default ProductRoute;
