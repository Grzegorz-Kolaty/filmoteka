import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  align-content: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
  background: ${({ theme }) => theme.color.white};

  @media(max-width: 767px) {
    flex-flow: row wrap;
    gap: 16px;
    padding: 16px;
  };

  ${({ bigposter }) => bigposter && css`
    flex-flow: row nowrap;
    padding: 40px;
  `}

  ${({ poster }) => poster && css`
    gap: 16px;
  `}

  ${({ smallposter }) => smallposter && css`
    gap: 12px;
    width: auto;
    align-content: flex-start;

    @media(max-width: 767px) {
      gap: 8px;
    };
  `};
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  border-radius: 5px;

  @media(max-width: 767px) {
    align-self: start;
    justify-self: center;
  };

  ${({ bigposter }) => bigposter && css`
    height: 564px;
    width: 399px;
  `};

  ${({ poster }) => poster && css`
    height: 434px;
    width: 292px;
  `};

  ${({ smallposter }) => smallposter && css`
    width: 100%;
  `};

`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  ${({ bigposter }) => bigposter && css`
    font-size: 36px;
  `}
  
  @media(max-width: 767px) {
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
  `}

  ${({ smallposter }) => smallposter && css`
    grid-template-rows: auto auto;
    grid-gap: 0px;
  `};

  @media(max-width: 767px) {
    width: 50%;
    font-size: 12px;
  };
`;

export const Info = styled.div`
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  ${({ bigposter }) => bigposter && css`
    font-size: 20px;
  `};

  @media(max-width: 767px) {
    font-size: 14px;
  };
`;

export const Extras = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;