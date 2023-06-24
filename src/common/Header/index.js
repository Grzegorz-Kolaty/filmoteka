import React from "react";
import {
  Wrapper,
  Content,
  NavContainer,
  Logo,
  Icon,
  Title,
  Navigation,
  List,
  Item,
} from "./styled";
import camera from "../../images/camera.svg";
import Search from "../../features/Search";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <NavContainer>
          <Logo>
            <Icon src={camera} />
            <Title>Movies Browser</Title>
          </Logo>
          <Navigation>
            <List>
              <Item>Movies</Item>
              <Item>People</Item>
            </List>
          </Navigation>
        </NavContainer>
        <Search />
      </Content>
    </Wrapper>
  );
};
export default Header;
