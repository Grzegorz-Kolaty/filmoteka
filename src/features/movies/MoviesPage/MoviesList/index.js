import { Section } from "../../../../components/Section";
import { Container } from "../../../../components/Container";
import { MoviesPopular } from "../MoviesPopular";

export const MoviesList = () => {
  return (
    <Container>
      <Section title="Popular movies" body={<MoviesPopular />} />
    </Container>
  );
};
