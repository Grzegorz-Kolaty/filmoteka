import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
  background: ${({ theme }) => theme.color.white};

  ${({ bigposter }) => bigposter && css`
    padding: 40px;
    justify-content: flex-start;
    flex-flow: row nowrap;
    
    @media(max-width: 900px) {
      flex-flow: row wrap;
      padding: 16px;
      gap: 16px;
    };
  `};

  ${({ poster }) => poster && css`
    gap: 16px;
    justify-content: flex-start;

    @media(max-width: 900px) {
      flex-flow: row nowrap;
    };
  `};

  ${({ smallposter }) => smallposter && css`
    justify-content: flex-start;
    gap: 12px;

    @media(max-width: 900px) {
      gap: 8px;
      padding: 8px 8px 16px 8px;
    };
  `};
`;

export const Image = styled.img`
  border-radius: 5px;

  ${({ bigposter }) => bigposter && css`
  width: 30%;
  `}
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  ${({ bigposter }) => bigposter && css`
    font-size: 36px;
  `}
  
  @media(max-width: 900px) {
    font-size: 16px;
  };

  ${({ smallposter }) => smallposter && css`
    text-align: center;
 `}
`;

export const Description = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 16px;

  ${({ bigposter }) => bigposter && css`
    width: 60%;
    gap: 24px;
    font-size: 18px;

    @media(max-width: 900px) {
      gap: 16px;
    };
  `};

  ${({ poster }) => poster && css`
  `};
`;
export const WrapperExtras = styled.div`
  gap: 8px;
`;

export const Info = styled.div`
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  ${({ bigposter }) => bigposter && css`
    font-size: 20px;
  `};

  @media(max-width: 900px) {
    font-size: 14px;
  };
`;

export const Extras = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const Overview = styled.div`
`;
