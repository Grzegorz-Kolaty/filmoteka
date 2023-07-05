import styled from "styled-components";
import { ReactComponent as Search } from "../../../../components/images/searchIcon.svg";

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 33px;
    padding: 15px;
    gap: 15px;
    width: 100%;
`;

export const Input = styled.input`
    border: none;
    font-size: 16px;
    background-color: transparent;
    outline: 0;
    padding: 0px;
`;

export const SearchIcon = styled(Search)`
    cursor: pointer;
`;
