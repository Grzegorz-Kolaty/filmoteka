import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: rgb(12, 117, 117);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const NavList = styled.ul`
  max-width: 100%;
  background-color: rgb(12, 117, 117);
  text-align: center;
  margin: auto;
  padding: 20px;
  list-style-type: none;

  @media (max-width: 767px) {
    gap: 3px;
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s;
  list-style: none;

  &:hover {
    transform: scale(1.02);
    font-weight: 700;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  list-style: none;

  &:active {
    color: white;
    text-decoration: underline;
  }

  &:hover {
    border-bottom: 1px solid;
  }

  &:focus-within {
    font-weight: 700;
  }
`;
