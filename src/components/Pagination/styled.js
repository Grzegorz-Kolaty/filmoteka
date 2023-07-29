import { styled, css } from "styled-components";
import { ReactComponent as Vector } from "../../components/images/vector.svg";

export const StyledVector = styled(Vector)`
  color: ${({ theme }) => theme.color.scienceBlue};
  ${({ reversed }) => reversed && css`
    transform: scaleX(-1);
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 12px;

  @media(max-width: 900px) {
      gap: 8px;
    };
`;

export const Button = styled.button`
  border: none;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 8px 16px;
  grid-gap: 8px;
  background-color: ${({ theme }) => theme.color.pattensBlue};
  font-size: 14px;
  line-height: 1.4;
  border-radius: 5px;

  ${({ disabled, theme }) => disabled && css`
      background-color: ${theme.color.grey};
      cursor: not-allowed;
    `}

  @media(max-width: 900px) {
    padding: 8px 12px;
  };
`;

export const PageCounter = styled.span`
  font-size: 16px;
  margin: 0 12px;
  white-space: nowrap;

  @media(max-width: 900px) {
    margin: 0;
    };
`;

export const ButtonSpan = styled.span`
  @media(max-width: 900px) {
    display: none;
  };
`;