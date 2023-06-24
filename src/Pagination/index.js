import { toFirst, toPrevious } from "";
import { NavItem, Nav, StyledNavLink, NavList } from "./styled";

export const Prev = () => (
  <Nav>
    <NavList>
      <NavItem>
        <StyledNavLink to={toFirst()}>First</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to={toPrevious()}>Previous</StyledNavLink>
      </NavItem>
    </NavList>
  </Nav>
);
