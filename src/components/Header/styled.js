import styled from "styled-components";

export const Headline = styled.h1`
  font-size: 64px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 14%;
  gap: 24px;
  margin-left: 26px;

  @media (max-width:450px) {
    font-size: 24px;
    line-height: 110%;
    display: flex;
    align-items: center;
    width: 64px;
    position: absolute;
    top: 50.67%;
    margin-left:29px;
  }
`;
