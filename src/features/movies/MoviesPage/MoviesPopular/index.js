import { Container } from "../../../../components/Container";
import { Section } from "../../../../components/Section";
import Movies from "../getMovies";

export const MoviesPopular = () => {
  return (
    <Container>
      <Section body={<Movies />} />
    </Container>
  );
};
