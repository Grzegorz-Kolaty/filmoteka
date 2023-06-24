import React from "react";
import {
  Icon,
  Title,
  Nav,
  List,
  Item,
} from "./styled";
import camera from "./../../components/images/camera.svg"
import Search from "../../features/movies/MoviesPage/Search";

const Navigation = () => {
  return (
    <>
      <Nav>
        <Icon src={camera} />
        <Title>Movies Browser</Title>
        <List>
          <Item>Movies</Item>
          <Item>People</Item>
        </List>
      </Nav>
      <Search />
    </>
  );
};
export default Navigation;
