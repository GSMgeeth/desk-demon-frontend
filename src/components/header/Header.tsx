import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import React from "react";
import "./styles.scss";

const SideNave = () => {
  return (
    <div>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Desk Demon</NavbarHeading>
        </NavbarGroup>
      </Navbar>
    </div>
  );
};

export default SideNave;
