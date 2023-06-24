import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.woodsmoke};
  color: ${({ theme }) => theme.color.white};
  position: sticky;
  top: 0;
  width: 100%;
  height: 94px;
  z-index: 10;

  @media (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.breakpoints.large}) {
    position: relative;
  }
`;

export const Content = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 23px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 32px 16px 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: column;
  }
`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 8px;
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  color: white;
  white-space: nowrap;
  width: 60px;
  height: 40px;
  margin-top: 32px;
  margin-left: 1px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin-left:40px;
`;

export const Item = styled.li`
  width: 102px;
  height: 48px;
  margin-top: 5px;
  margin-left: 216px;

  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-left: 593px;
    margin-top: 23px;
    radius: 24px;
    border: 1px;
    padding: 8px 24px 8px 24px;
    gap: 10px;
  }
`;
