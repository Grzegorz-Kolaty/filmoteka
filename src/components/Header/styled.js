import styled from "styled-components";

export const Headline = styled.h1`
  width: 503px;
  height: 16px;
  font-size: 64px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 120%;
  gap: 24px;
  margin-left: 70px;

  @media (max-width: 767px) {
    /* Dostosuj style dla ekranów o szerokości mniejszej lub równej 767px */
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    width: 214px;
    height: 29px;
    padding-top: 130px; /* Zastosuj padding-top zamiast margin-top */
    margin-left: 25px;
  }
`;
