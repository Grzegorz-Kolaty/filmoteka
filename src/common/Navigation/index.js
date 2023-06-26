import React from "react";
import {
  Icon, Title, Nav, List, Item, Logo, NavContainer} from "./styled.js";
import camera from "./../../components/images/camera.svg";
import Search from "../../features/movies/MoviesPage/Search";

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavContainer>
        <Logo>
          <Icon src={camera} />
          <Title>Movies Browser</Title>
        </Logo>
        <List>
          <Item>Movies</Item>
          <Item>People</Item>
        </List> 
        <Search />
      </NavContainer>
      </Nav>

     
    </>
  );
};
export default Navigation;
