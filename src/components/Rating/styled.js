import styled, { css } from "styled-components";
import star from "../images/star.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-flow: column wrap; 
  justify-content: flex-end;

  @media(max-width: 900px) {
    justify-content: flex-start;  
  };
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("${star}");
  background-size: cover;
`;

export const Textbox = styled.div`
  white-space: nowrap;
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkGrey};

  ${({ header }) => header && css`
    max-width: 150px;
    color: white;
  `}
`;


export const Rate = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.woodsmoke};
  
  ${({ header }) => header && css`
    color: white;
  `}
`;

export const Votes = styled.span`
  ${({ header }) => header && css`
    color: white;
  `}
`;
