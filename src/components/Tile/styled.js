import { styled, css } from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  border-radius: 5px;
  padding: 40px;
  
  grid-gap: 40px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
  background: ${({ theme }) => theme.color.white};

  ${({ list }) => list && css`
    grid-template-columns: auto;
    padding: 16px;
    grid-gap: 10px;
    width: 208px;
    height: 339px;
  `}
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  ${({ list }) => list && css`
    width: 177px;
    height: 231px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ list }) => list && css`
    align-items: center;
`}
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const TitleSmall = styled.h2`
  margin: 0px;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const List = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
  font-size: 18px;
  line-height: 21.6px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 32px;
`;