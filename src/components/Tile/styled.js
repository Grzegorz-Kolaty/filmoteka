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
  height: 0px;
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

export const MovieDate = styled.p`
  width: 96px;
  height: 24px;
  color: #7e839a;
  flex-grow: 0;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 767px) {
    width: 32px;
    height: 17px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;

    display: flex;
    align-items: center;
    color: #7e839a;
    flex: none;
    order: 1;
    align-self: flex-start;
    flex-grow: 0;
  }
`;

export const MovieGenre = styled.span`
  background-color: #e4e6f0;
  padding: 4px 8px;
  display: inline-flex;
  margin-right: 8px;
  border-radius: 5px;
`;

export const Tag = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 279px;
  height: 36px;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 107px;
    height: 46px;

    flex: none;
    order: 1;
    align-self: center;
    flex-grow: 0;
  }
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Pagination = styled.div`
  width: 525px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  margin-left: 460px;
`;
