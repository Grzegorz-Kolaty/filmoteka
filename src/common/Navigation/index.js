import React from "react";
import { Icon, Title, Nav, List, NavigationLink, Logo, NavContainer } from "./styled";
import camera from "../../components/images/camera.svg";
import Search from "../../features/movies/MoviesPage/Search";

const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Icon src={camera} />
          <Title>Movies Browser</Title>
        </Logo>
        <List>
          <NavigationLink to="/movies">movies</NavigationLink>
          <NavigationLink to="/movie">movieDetails</NavigationLink>
          <NavigationLink to="/actors">people</NavigationLink>
          <NavigationLink to="/actor">actorDetails</NavigationLink>
        </List>
        <Search />
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
