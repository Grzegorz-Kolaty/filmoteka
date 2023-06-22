import poster from "../../images/poster.png";
import {
  Tile,
  MoviesTile,
  Title,
  Subtitle,
  Tags,
  Tag,
  Image,
  Description,
  MoviesTileFrame,
} from "./styled";

function MoviesPage() {
  return (
    <Tile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
    </Tile>
  );
}

export default MoviesPage;
