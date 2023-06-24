export const Row = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  position: absolute;
  width: 1368px;
  height: 339px;
  left: 276px;
  top: 217px;
  @media (max-width: 767px) {
    position: absolute;
    width: 288px;
    height: 767px;
    left: 16px;
    top: 202px;
  }
`;

export const PersonTile = styled.article`
  width: 208px;
  height: 339px;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 12px;

  position: absolute;
  width: 208px;
  height: 339px;
  left: 0px;
  top: 0px;
  background: ${({ theme }) => theme.color.white};
`;

export const Picture = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 176px;
  height: 29px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
