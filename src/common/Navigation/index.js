import React from "react";
import { Icon, Title, Nav, List, NavigationLink, Logo, NavContainer, Wrapper } from "./styled";
import camera from "../../components/images/camera.svg";
import Search from "../../features/movies/MoviesPage/Search";

const Navigation = () => {
  return (
    <Nav>
      <Wrapper>
        <NavContainer>
          <Logo>
            <Icon src={camera} />
            <Title>Movies Browser</Title>
          </Logo>
          <List>
            <NavigationLink to="/movies">movies</NavigationLink>
            <NavigationLink to="/actors">people</NavigationLink>
          </List>
        </NavContainer>
        <Search />
      </Wrapper>
    </Nav>
  );
};

export default Navigation;
