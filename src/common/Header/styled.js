import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.woodsmoke};
  color: ${({ theme }) => theme.color.white};
  position:initial;
  top: 0;
  width: 380px;

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
`;

export const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  display: flex;
  margin: 0px 0px 0px 12px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 16px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 12px;
  }
`;
