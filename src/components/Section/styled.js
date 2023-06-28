import styled from "styled-components";

export const Sections = styled.section`
  background-color: transparent;
  margin: 0 auto;
  max-width: 1368px;
`;

export const Title = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 70px;
  min-width: 150px;
  align-items: center;
  background-color: transparent;
  font-size: 36px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Body = styled.div`
  background-color: transparent;
`;
