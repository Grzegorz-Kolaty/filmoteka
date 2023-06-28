import poster from "./../../../../components/images/poster.png";
import {
  Tile,
  MoviesTile,
  Title,
  Subtitle,
  Tags,
  Tag,
  Image,
  Description,
} from "../MoviesList/styled";

export const MoviesPopular = () => {
  return (
    <Tile>
      <MoviesTile>
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
      </MoviesTile>
      <MoviesTile>
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
      </MoviesTile>
      <MoviesTile>
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
      </MoviesTile>
      <MoviesTile>
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
      </MoviesTile>
    </Tile>
  );
};
