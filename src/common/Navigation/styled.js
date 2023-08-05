import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import camera from "./camera.svg"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.black};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  justify-items: center;
  margin: 0 auto;
  max-width: 1920px;
  padding: 23px 3%;


  @media (max-width: 900px) {
    flex-flow: row wrap;
    gap: 24px;
    justify-content: space-around;
    padding: 24px 16px 16px 16px;
  };
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    gap: 8px;
  };
 `;
 export const LogoLink = styled(Link)`
 text-decoration: none;
`;


export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${camera}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 900px) {
    width: 17px;
    height: 17px;
  };
 `;

export const Title = styled.h1`
  white-space: nowrap;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: 900px) {
    font-size: 13px;
  };
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const NavigationLink = styled(NavLink)`
  height: 48px;
  width: 102px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 24px;

  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid transparent;

  @media (max-width: 900px) {
    height: 34px;
    width: 67px;
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 29px;
  };

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.white};
  }

  &.active {
        border: 2px solid ${({ theme }) => theme.color.black};
        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
    }
`; 