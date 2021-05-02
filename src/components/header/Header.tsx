import {
  Alignment,
  Navbar,
  NavbarGroup,
} from "@blueprintjs/core";
import React from "react";
import {SiNodemon} from "react-icons/si"
import "./styles.scss";

const Header = () => {
  return (
    <div>
      <Navbar style={{height:"70px"}}>
        <NavbarGroup align={Alignment.LEFT} style={{height:"100%"}}>
          <h2><SiNodemon/> Desk Demon</h2>
        </NavbarGroup>
      </Navbar>
    </div>
  );
};

export default Header;
