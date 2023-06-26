import { Rating } from "../../../components/Rating";
import {
  Tile,
  TileContent as Content,
  TileDescription as Description,
  TileImage as Image,
  TileTag as Tag,
  TileTags as Tags,
  TileTitle as Title,
  TileSubtitle as Subtitle
} from "../../../components/Tile";
import poster from "../../../components/images/poster.png";

export const MovieTile = () => {
  return (
    <Tile>
      <Image src={poster} alt="" />
      <Content>
        <Title>Mulan</Title>
        <Subtitle>2020</Subtitle>
        Production: China, United States <br />
        Release date: 24.10.2020
        <Tags>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
          <Tag>Action</Tag>
        </Tags>
        <Rating />
        <Description>A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</Description>
      </Content>
    </Tile>
  );
};