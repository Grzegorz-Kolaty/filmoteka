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
  Pagination,
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
  info,
  movieDate,
  movieGenre,
  tag,
  tags,
  pagination,
}) => {
  return (
    <Wrapper person={person} popular={popular}>
      <Image src={img} list={list} row={row} />
      <Content info={info}>
        {title && <Title>{title}</Title>}
        {titleSmall && <TitleSmall>{titleSmall}</TitleSmall>}
        {movieTitle && <MovieTitle>{movieTitle}</MovieTitle>}
        {subtitle && subtitleText && (
          <div>
            <Subtitle>{subtitle}</Subtitle>
            {subtitleText}
            <br />
          </div>
        )}
        {subtitle2 && subtitleText2 && (
          <div>
            <Subtitle>{subtitle2}</Subtitle>
            {subtitleText2}
          </div>
        )}
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
        {pagination && (
          <div>
            <Pagination>{pagination}</Pagination>
          </div>
        )}
      </Content>
    </Wrapper>
  );
};
