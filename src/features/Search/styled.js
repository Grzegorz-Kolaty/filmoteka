import styled from "styled-components";
import { ReactComponent as Search } from "../../components/images/searchIcon.svg";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  padding: 12px;
  width: 100%;
  height: 48px;
  gap: 16px;
`;

export const Input = styled.input`
  border: none;
  font-size: 16px;
  background-color: transparent;
  outline: 0;
  padding: 0px;
  flex-grow: 1;
`;

export const SearchIcon = styled(Search)`
  margin-left: 24px;
  cursor: pointer;
`;
