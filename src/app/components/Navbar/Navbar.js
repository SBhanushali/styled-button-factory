import React, { useState } from "react";

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
              <NavLink href="https://github.com/SBhanushali/styled-button-factory">
                Github
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
