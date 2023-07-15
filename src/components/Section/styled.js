import styled, { css } from "styled-components";

export const Sections = styled.section`
  max-width: 1368px;
  margin: 0 auto;
  background-color: transparent;

  @media(max-width: 767px) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  
  @media(max-width: 767px) {
    font-size: 18px;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 24px;
  background-color: transparent;

  ${({ actors }) => actors && css`
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `}

  ${({ movies }) => movies && css`
    grid-template-columns: repeat(auto-fill, 324px);
  `}

  @media(max-width: 767px) {
    grid-template-columns: auto;
    grid-gap: 16px;
  }
`;