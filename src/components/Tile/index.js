import { Rating } from "../Rating";
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
  pagination,
  rating,
  votes
}) => {
  return (
    <Wrapper person={person} list={list} popular={popular}>
      <Image src={img} list={list} row={row} />
      <Content list={list}>
        {title && <Title>{title}</Title>}
        {titleSmall && <TitleSmall>{titleSmall}</TitleSmall>}
        {movieTitle && <MovieTitle>{movieTitle}</MovieTitle>}
        {subtitle && <Subtitle>{subtitle}{subtitleText}</Subtitle>}
        {subtitle2 && <Subtitle>{subtitle2}{subtitleText2}</Subtitle>}
        {description && <Description>{description}</Description>}
        {movieDate && (
          <p>
            <MovieDate>{movieDate}</MovieDate>
          </p>
        )}
        {pagination && (
          <div>
            <Pagination>{pagination}</Pagination>
          </div>
        )}
        {rating && <Rating rating={rating} votes={votes} />}
      </Content>
    </Wrapper>
  );
};
