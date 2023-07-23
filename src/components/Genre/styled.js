import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    grid-gap: 8px;
    justify-content: start;
    align-items: center;
`;

export const Tag = styled.div`
    padding: 8px 16px;
    line-height: 1.1;
    background-color: ${({ theme }) => theme.color.mystic};
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.4;

    @media(max-width: 900px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;