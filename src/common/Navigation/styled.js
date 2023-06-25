import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding-bottom: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 48px;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 10px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 8px;
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  color: white;
  white-space: nowrap;
  height: 40px;
  margin-top: 30px;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 0;
    margin-bottom: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: flex-start;
    width: 100%;
    margin-top: 0;
  }
`;

export const Item = styled.li`
  width: 102px;
  height: 48px;
  margin-left: 10px;
  border: 1px solid white;
  border-radius: 24px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    margin-top: 10px;
  }
`;