import React from "react";
import {
  Icon,
  Title,
  Nav,
  List,
  NavigationLink,
  Logo,
  Wrapper,
} from "./styled";
import Search from "../../features/Search";

const Navigation = () => {
  return (
    <Nav>
      <Wrapper>
        <Logo>
          <Icon />
          <Title>Movies Browser</Title>
        </Logo>
        <List>
          <NavigationLink to="/movies">movies</NavigationLink>
          <NavigationLink to="/actors">people</NavigationLink>
        </List>
        <Search />
      </Wrapper>
    </Nav>
  );
};

export default Navigation;
