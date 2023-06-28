import { styled } from "styled-components";

export const Tile = styled.article`
  width: Hug (1, 368px);
  height: Hug (650px);
  top: 217px;
  left: 276px;
  gap: 24px;
  display: inline-flex;
  align-items: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 288px;
    height: 1069px;
    left: 16px;
    top: 200px;
  }
`;

export const MoviesTile = styled.div`
  height: 650px;
  width: 324px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
    background: ${({ theme }) => theme.color.white};

    width: 288px;
    height: 201px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  margin-left: 16px;
  margin-top: 16px;

  background: url(Mulan.jpg);
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 114px;
    height: 169px;
    left: calc(50% - 114px / 2 - 71px);
    top: auto;

    background: url(Mulan.jpg);
    border-radius: 5px;
  }
`;

export const Title = styled.header`
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

export const Subtitle = styled.div`
  width: 39px;
  height: 24px;
  color: #7e839a;
  flex: none;
  order: 1;
  align-self: flex-start;
  flex-grow: 0;
  font-size: 16px;
  font-family: Poppins;
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

export const Tags = styled.ul`
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

export const Tag = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  width: 77px;
  height: 36px;
  background: #e4e6f0;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 0px;

    width: 48px;
    height: 19px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 110%;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 292px;
  height: 105px;
  margin-left: 16px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 126px;
    height: 128px;

    flex: none;
    order: 1;
    align-self: flex-start;
    flex-grow: 0;
  }
`;
