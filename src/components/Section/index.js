import { Sections, Title, Body } from "./styled";

export const Section = ({ title, body, actors, movies }) => {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      <Body actors={actors} movies={movies}>
        {body}
      </Body>
    </Sections>
  );
};