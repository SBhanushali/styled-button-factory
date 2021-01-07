import styled from "styled-components";
import StyledButtonLogo from "../../assets/logo.svg";
import { FaGithub } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 100%;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img.attrs({
  src: `${StyledButtonLogo}`,
})`
  cursor: default;
`;

export const Github = styled(FaGithub)`
  color: #fdbb2d;
  font-size: 36px;
  margin-bottom: -0.5em;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fdbb2d;
  }
`;

export const NavLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #fdbb2d;
  }
`;
