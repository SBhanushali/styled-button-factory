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
          <NavLogo href="/">
            <NavIcon />
          </NavLogo>
          <HamburgerIcon onClick={handleClick}>
            {click ? <Cross /> : <Hamburger />}
          </HamburgerIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink href="/docs">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/github">Github</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
