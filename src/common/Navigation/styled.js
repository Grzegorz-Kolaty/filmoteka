import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.header`
  background: ${({ theme }) => theme.color.black};
`;

export const NavContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1330px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
  }
`;

export const Logo = styled.div`
  display: inherit;
  align-items: center;
  margin-right: 75px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin-right: 24px;
    margin-top: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 8px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 4px;

  margin: 0 12px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  line-height: 40px;
  font-size: 24px;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    font-size: 20px;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const List = styled.ul`
  color: white;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  height: 50px;
  margin-right: 20px;
  padding: 0;
`;

export const NavigationLink = styled(Link)`
  display: inherit;
  padding: 8px 24px;
  margin: 23px 0 24px 5px;
  border-radius: 24px;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 8px;

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    border-radius: 30px;
    font-size: 13px;
    line-height: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    border-radius: 29px;
    font-size: 12px;
    line-height: 18px;
    padding: 8px;
    margin: 10px 0;
  }
`; 