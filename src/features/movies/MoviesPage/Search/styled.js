import styled from "styled-components";
import { ReactComponent as Search } from "../../../../components/images/searchIcon.svg";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  padding: 15px;
  width: 100%;

  & > svg {
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  border: none;
  font-size: 16px;
  background-color: transparent;
  outline: 0;
  padding: 0px;
  flex-grow: 1;
  padding-left: 10px; 
`;

export const SearchIcon = styled(Search)`
  cursor: pointer;
`;
