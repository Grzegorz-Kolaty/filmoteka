import styled, { css } from "styled-components";

export const Sections = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 24px;
  padding: 56px 4%;

  @media(max-width: 900px) {
    padding: 24px 4%;
    gap: 12px;
  };
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  
  @media(max-width: 900px) {
    font-size: 18px;
  };
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 24px;
  background-color: transparent;

  @media(max-width: 900px) {
      grid-gap: 16px;
    };

 ${({ actor }) => actor && css`
    grid-template-rows: 564px;
 `}

  ${({ actors }) => actors && css`
    grid-template-columns: repeat(auto-fill, 208px);
    grid-auto-rows: minmax(339px, auto);
    text-align: center;

    @media(max-width: 900px) {
      grid-template-columns: repeat(auto-fill, 162px);
      grid-auto-rows: minmax(245px, auto);
      grid-gap: 16px;
    };
  `};

  ${({ movies }) => movies && css`
    grid-template-columns: repeat(auto-fill, 324px);

    @media(max-width: 900px) {
      grid-template-columns: auto;
      grid-auto-rows: 201px;
      grid-gap: 16px;
    };
  `};
`;