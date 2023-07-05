import {
  Content,
  Description,
  Image,
  Subtitle,
  Title,
  TitleSmall,
  MovieTitle,
  Wrapper,
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
      </Content>
    </Wrapper>
  );
};
