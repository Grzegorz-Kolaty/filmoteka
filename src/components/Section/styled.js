import styled from "styled-components";

export const Sections = styled.section`
  background-color: transparent;
`;

export const Title = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 70px;
  min-width: 150px;
  align-items: center;
  background-color: transparent;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Body = styled.div`
  background-color: transparent;
`;