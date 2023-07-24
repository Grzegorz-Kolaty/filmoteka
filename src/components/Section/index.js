import { Sections, Title, Body } from "./styled";

export const Section = ({ title, body, actor, actors, movies }) => {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      <Body actor={actor} actors={actors} movies={movies}>
        {body}
      </Body>
    </Sections>
  );
};