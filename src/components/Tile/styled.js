import { styled, css } from "styled-components";

export const Item = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  width: 324px;
  height: 650px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
  background: ${({ theme }) => theme.color.white};
`;

export const Wrapper = styled.div`
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
`;

export const Content = styled.div`
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const TitleSmall = styled.h2`
  margin: 0px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`;

export const MovieTitle = styled.h2`
`;

export const List = styled.div`
`;


export const Subtitle = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
  font-size: 18px;
  line-height: 21.6px;
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 32px;
`;

export const MovieDate = styled.div`
`;

export const Pagination = styled.div`
  width: 560px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  margin-left: 380px;
`;
