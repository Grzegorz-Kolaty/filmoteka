import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 8px;
`;

export const Tag = styled.div`
    grid-row: 1;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    line-height: 1.1;
    background-color: ${({theme}) => theme.color.mystics};
`;