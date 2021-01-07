import React, { useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  Github,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevState) => !prevState);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon alt="Styled Button" />
          </NavLogo>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink
                href="https://github.com/SBhanushali/styled-button-factory"
                alt="github/SBhanushali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
