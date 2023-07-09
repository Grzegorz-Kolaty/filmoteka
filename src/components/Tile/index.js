import {
  Content,
  Description,
  Image,
  Subtitle,
  Title,
  TitleSmall,
  MovieTitle,
  Wrapper,
  MovieDate,
  MovieGenre,
  Tag,
  Tags,
} from "./styled";

export const Tile = ({
  person,
  popular,
  list,
  row,
  title,
  titleSmall,
  movieTitle,
  subtitle,
  subtitle2,
  subtitleText,
  subtitleText2,
  description,
  img,
  movieDate,
  movieGenre,
  tag,
  tags,
}) => {
  return (
    <Wrapper person={person} list={list} popular={popular}>
      <Image src={img} list={list} row={row} />
      <Content list={list}>
        {title && <Title>{title}</Title>}
        {titleSmall && <TitleSmall>{titleSmall}</TitleSmall>}
        {movieTitle && <MovieTitle>{movieTitle}</MovieTitle>}
        {subtitle && (
          <div>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        )}
        {subtitle2 && <Subtitle>{subtitle2}</Subtitle>}
        {description && <Description>{description}</Description>}
        {movieDate && (
          <p>
            <MovieDate>{movieDate}</MovieDate>
          </p>
        )}
        {movieGenre && (
          <div>
            {movieGenre.split(",").map((genre) => (
              <MovieGenre key={genre}>{genre}</MovieGenre>
            ))}
          </div>
        )}
        {tag && (
          <p>
            <Tag>{tag}</Tag>
          </p>
        )}
        {tags && (
          <ul>
            <Tags>{tags}</Tags>
          </ul>
        )}
      </Content>
    </Wrapper>
  );
};
