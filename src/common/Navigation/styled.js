import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.black};
  padding: 23px;

`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  max-width: 1368px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-gap: 24px;
  }

`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
 `;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.white};
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: white;
  height: 50px;
  padding: 0;
  margin: 0;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.white};
  }
`; 