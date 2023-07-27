import styled, { css } from "styled-components";
import star from "../images/star.svg";

export const Wrapper = styled.div`
  white-space: nowrap;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  ${({ header }) =>
    header &&
    css`
      align-items: flex-start;
      padding: 30px;
    `}

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    > * {
     margin-bottom:-33px;
    }
  }
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${star}");
  background-size: cover; /* Ensure the background image covers the div */

  ${({ header }) =>
    header &&
    css`
      width: 40px;
      height: 40px;
    `}

  @media (max-width: 450px) {
    ${({ header }) =>
      header &&
      css`
        width: 16px;
        height: 16px;
      `}
  }
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

  @media (max-width: 450px) {
    flex-direction: row;
    align-items: flex-end; /* Stack elements at the bottom for smaller resolutions */
    
  }
`;


export const Rate = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.woodsmoke};

  ${({ header }) =>
    header &&
    css`
      font-size: 30px;
      font-weight: 500;
      line-height: 51px;
      letter-spacing: 0px;
      color: ${({ theme }) => theme.color.white};

      &::after {
        content: "/10";
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
      }
    `}

  @media (max-width: 450px) {
    ${({ header }) =>
      header &&
      css`
        font-size: 18px;
        line-height: 32px;
       margin-bottom:-9px;
      `}
  }
`;

export const Votes = styled.span`
  ${({ header }) =>
    header &&
    css`
      position: absolute;
      top: 79.67%;
      line-height: 59%;
      display: flex;
      align-items: center;
      width: 77px;

      @media (max-width: 450px) {
        position: initial;
        top: auto;
        line-height: 120%;
        display: flex;
        align-items: center;
        width: auto;
        margin-left: 3px;
        font-size: 10px;
      }
    `}
`;
