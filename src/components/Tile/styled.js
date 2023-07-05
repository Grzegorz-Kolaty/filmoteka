import { styled, css } from "styled-components";

export const Wrapper = styled.article`
  padding: 16px;
  width: 208px;
  height: 339px;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;

  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  background: ${({ theme }) => theme.color.white};
  ${({ person }) =>
    person &&
    css`
      grid-template-columns: auto;
      padding: 16px;
    `}
  ${({ popular }) =>
    popular &&
    css`
      grid-template-columns: auto;
      padding: 24px;
      width: 324px;
      height: 650px;
    `}
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  ${({ list }) =>
    list &&
    css`
      width: 177px;
      height: 231px;
    `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ info }) =>
    info &&
    css`
      width: 292px;
      height: 105px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
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

export const MovieTitle = styled.h2`
  width: 292px;
  height: 29px;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: 767px) {
    width: 120px;
    height: 21px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    flex: none;
    order: 0;
    align-self: center;
    flex-grow: 0;
  }
`;

export const List = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  ${({ row }) =>
    row &&
    css`
      grid-template-columns: repeat(4, 1fr);
    `}
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
