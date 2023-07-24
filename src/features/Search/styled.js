import styled from "styled-components";
import searchIcon from "./searchIcon.svg";

export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding: 0 0 0 24px;
  max-width: 432px;
  height: 48px;
  border-radius: 33px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    height: 44px;
    font-size: 13px;
    line-height: 1.3;
  };
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0;
  padding: 0 0 0 16px;
  height: 48px;
  width: 90%;

  background-color: transparent;
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${searchIcon}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 900px) {
    width: 16px;
    height: 16px;
  };
`;
