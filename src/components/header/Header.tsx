import { Alignment, Navbar, NavbarGroup } from "@blueprintjs/core";
import React from "react";
import { SiNodemon } from "react-icons/si";
import "./styles.scss";

const Header = () => {
  return (
    <div>
      <Navbar style={{ height: "70px" }}>
        <NavbarGroup align={Alignment.LEFT} style={{ height: "100%" }}>
          <h2>
            <SiNodemon /> Desk Demon
          </h2>
        </NavbarGroup>
        <Navbar.Group align={Alignment.RIGHT} style={{ height: "70px" }}>
          <label className="display-name">Geeth Sandaru</label>
          <img src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.6435-9/143898506_3685239928233146_4483467510135757867_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=o36Fs7nORR8AX-MCve4&_nc_ht=scontent.fcmb4-1.fna&oh=c49138393a8c63f33239183d940ae6a6&oe=60B4F2AB" className="avator-image" alt="user avator" />
        </Navbar.Group>
      </Navbar>
    </div>
  );
};

export default Header;
