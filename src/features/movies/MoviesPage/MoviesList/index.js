import poster from "./../../../../components/images/poster.png";
import Header from "../../../../components/Header";
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

export const MoviesList = () => {
  return (
    <Tile>
      <Header>Popular movies</Header>
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
};
