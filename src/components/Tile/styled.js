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
    flex-flow: row nowrap;
    height: 564px;
    
    @media(max-width: 900px) {
      padding: 16px;
      gap: 16px;
    };
  `};

  ${({ poster }) => poster && css`
    gap: 16px;
    align-self: flex-start;
    height: 100%;

    @media(max-width: 900px) {
      align-self: normal;
      justify-self: normal;
      flex-flow: row nowrap;
    };
  `};

  ${({ smallposter }) => smallposter && css`
    gap: 12px;

    @media(max-width: 900px) {
      gap: 8px;
      padding: 8px 8px 16px 8px;
    };
  `};
`;

export const Image = styled.img`
  border-radius: 5px;
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
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto 1fr;
  grid-gap: 24px;

  ${({ bigposter }) => bigposter && css`
    font-size: 18px;
    grid-gap: 8px;
  `};

  ${({ poster }) => poster && css`
    grid-gap: 8px;

    @media(max-width: 900px) {
      grid-template-rows: auto auto auto auto 1fr;    
    };
  `};

  ${({ smallposter }) => smallposter && css`
    grid-template-rows: auto auto;
    grid-gap: 0px;
  `};
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