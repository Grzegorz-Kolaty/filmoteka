import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import { ActorTile } from "../ActorTile/index";
import { MoviesList } from "../../movies/MoviesPage/MoviesList";

export const ActorPage = () => {
  return (
    <Container>
      <Section body={<ActorTile />} />
      <Section
        title="Movies - cast(4)"
        body={<MoviesList />} />
      <Section
        title="Movies crew(4)"
        body={<MoviesList />} />
    </Container>
  );
};
