import styled from "styled-components";
import StyledButtonLogo from "../../assets/svgexport-103.svg";
import { FaTimes, FaBars } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
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
})``;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.9rem;
    cursor: pointer;
  }
`;

export const Cross = styled(FaTimes)`
  color: #fdbb2d;
`;
export const Hamburger = styled(FaBars)`
  color: #fdbb2d;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fdbb2d;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #fdbb2d;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fdbb2d;
      transition: all 0.3s ease;
    }
  }
`;
