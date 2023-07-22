import styled, { css } from "styled-components";
import star from "../images/star.svg";

export const Wrapper = styled.div`
  align-self: end;
  ${({ header }) =>
    header &&
    css`
      align-self: start;
      padding: 30px;
      margin-left:40px;
    `}
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${star}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({ header }) =>
    header &&
    css`
      width: 40px;
      height: 40px;
    `}
`;

export const Textbox = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkGrey};
  ${({ header }) =>
    header &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

export const Rate = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.woodsmoke};
  ${({ header }) =>
    header &&
    css`
      font-family: Poppins;
      font-size: 30px;
      font-weight: 500;
      line-height: 51px;
      letter-spacing: 0px;
      text-align: left;
      color: ${({ theme }) => theme.color.white};

      &::after {
        content: "/10";
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
`}
`;

export const Votes = styled.span`
   ${({ header }) =>
    header &&
    css`
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      margin-left:-140px;
      margin-top:43px;
    `}
`;
