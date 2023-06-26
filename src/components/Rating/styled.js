import { styled } from "styled-components";
import star from "../images/star.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Star = styled.img`
    width: 40px;
    height: 40px;
    background-image: url("${star}");
    background-repeat: no-repeat;
    background-position: center;
`;
