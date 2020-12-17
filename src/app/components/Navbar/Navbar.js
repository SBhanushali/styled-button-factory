import React, { useState } from "react";
import { StyledButtonLogo } from "../../assets/svgexport-103.svg";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  HamburgerIcon,
  Cross,
  Hamburger,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevState) => !prevState);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>
          <HamburgerIcon onClick={handleClick}>
            {click ? <Cross /> : <Hamburger />}
          </HamburgerIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/docs">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/github">Github</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
