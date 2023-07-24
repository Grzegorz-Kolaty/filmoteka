import styled, { css } from "styled-components";
import star from "../images/star.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.header ? "flex-start" : "flex-end")};
  padding: ${(props) => (props.header ? "30px" : "0")};
  margin-left: ${(props) => (props.header ? "40px" : "0")};

  @media (max-width: ${(props) => props.theme.breakpoint.mediumScreen}px) {
    padding: ${(props) => (props.header ? "20px" : "0")};
    margin-left: ${(props) => (props.header ? "20px" : "0")};
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobileMax}px) {
    padding: ${(props) => (props.header ? "15px" : "0")};
    margin-left: ${(props) => (props.header ? "10px" : "0")};
  }
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${star}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${(props) =>
    props.header &&
    css`
      width: 40px;
      height: 40px;

      @media (max-width: ${props.theme.breakpoint.mediumScreen}px) {
        width: 16px;
        height: 16px;
        margin-top: 8px;
      }

      @media (max-width: ${props.theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 16px;
      }
    `}
`;

export const Textbox = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => (props.header ? props.theme.color.white : props.theme.color.darkGrey)};
`;

export const Rate = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.color.woodsmoke};

  ${(props) =>
    props.header &&
    css`
      font-family: Poppins;
      font-size: 30px;
      font-weight: 500;
      line-height: 51px;
      letter-spacing: 0px;
      text-align: left;
      color: ${(props) => props.theme.color.white};

      &::after {
        content: "/10";
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
      }

      @media (max-width: ${props.theme.breakpoint.mediumScreen}px) {
        font-size: 24px;
        line-height: 40px;

        &::after {
          font-size: 14px;
          line-height: 17px;
        }
      }

      @media (max-width: ${props.theme.breakpoint.mobileMax}px) {
        font-size: 20px;
        line-height: 34px;

        &::after {
          font-size: 12px;
          line-height: 15px;
        }
      }
    `}
`;

export const Votes = styled.span`
  display: flex;
  align-items: center; /* Center the content vertically */

  ${(props) =>
    props.header &&
    css`
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0px;
      text-align: left;
      margin-left: 10px;

      @media (max-width: ${props.theme.breakpoint.mediumScreen}px) {
        font-size: 14px;
        margin-left: 0px;
        margin-top: 11px;
      }

      @media (max-width: ${props.theme.breakpoint.mobileMax}px) {
        font-size: 12px;
        margin-left: 0px;
        margin-top: 11px;
      }
    `}

  /* New styles for smaller screens */
  @media (max-width: ${(props) => props.theme.breakpoint.mobileMax}px) {
    ${(props) =>
      props.header &&
      css`
        margin-top: 0; /* Remove top margin */
        margin-left: initial; /* Reset margin-left to its default */
        margin-left: auto; /* Push Votes to the right using auto margins */
      `}
  }
`;
