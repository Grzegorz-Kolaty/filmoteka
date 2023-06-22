import { styled } from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
`;

export const TileImage = styled.img`
  width: 312px;
  height: 464px;
`;

export const TileContent = styled.div``;

export const TileTitle = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const TileSubtitle = styled.div`
  font-size: 22px;
`;

export const TileTags = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 16px -8px;
`;

export const TileTag = styled.li`
  background: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
`;

export const TileDescription = styled.p`
  font-size: 20px;
  margin: 24px 0 0 0;
  line-height: 1.6;
`;
