import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import SideNave from "../components/side-nav/SideNav";
import Clothing from "./clothing/Clothing";
import Dashboard from "./dashboard/Dashboard";
import Orders from "./orders/Orders";
import SalesPredictions from "./sales-predictions/SalesPredictions";

import "./styles.scss";

export enum ROUTES {
  HOME="/",
  SALE_PREDICTION="/sale-prodiction",
  CLOTHING = "/clothing",
  ORDERS ="/orders"
}


const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-wraper">
        <div className="side-nav-wrapper">
          <SideNave />
        </div>
        <div className="main-content">
          <Switch>
            <Route path={ROUTES.CLOTHING} render={() => <Clothing />} />
            <Route path={ROUTES.SALE_PREDICTION} render={() => <SalesPredictions />} />
            <Route path={ROUTES.ORDERS} render={() => <Orders />} />
            <Route exact path={ROUTES.HOME} render={() => <Dashboard />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
