import { styled } from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
`;

export const Content = styled.div``;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const TagsList = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 16px -8px;
`;

export const Item = styled.li`
  background: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
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