import styled, { css } from "styled-components";
import star from "../images/star.svg";

export const Wrapper = styled.div`
  align-self: end;
  ${({ header }) =>
    header &&
    css`
      align-self: start;
      padding: 30px;
    `}
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${star}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Textbox = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkGrey};
`;

export const Rate = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
