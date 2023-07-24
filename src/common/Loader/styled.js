import { keyframes, styled } from "styled-components";
import loader from "./loader.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Animation = styled.div`
  animation: ${rotate} 2s linear infinite;
  align-self: center;
  width: 150px;
  height: 150px;
  background-image: url("${loader}");
  background-repeat: no-repeat;
  background-position: center;
`;