import React from "react";
import Header from "../components/header/Header";
import SideNave from "../components/side-nav/SideNav";

import "./styles.scss";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-wraper">
        <div className="side-nav-wrapper">
          <SideNave />
        </div>
        <div className="main-content">

        </div>
      </div>
    </div>
  );
};

export default Main;
