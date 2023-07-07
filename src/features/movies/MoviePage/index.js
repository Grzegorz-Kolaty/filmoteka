import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Rating } from "../../../components/Rating";
import { Loading, NotFound } from "../MoviesPage/styled";
import { HeaderWrapper } from "./styled";
import { MovieTile } from "../MovieTile"

export const MoviePage = () => {
  const task = true;

  if (!task) {
    return (
      <Container>
        <div>Header z obrazkiem na full</div>
        <div>Header z obrazkiem na full</div>
        <div>Header z obrazkiem na full</div>
      </Container>
    );
  }

  const isLoading = false; // Ustaw to na true, jeśli chcesz wyświetlić stan ładowania
  const isError = false; // Ustaw to na true, jeśli chcesz wyświetlić stan błędu

  if (isLoading) {
    return (
      <Container>
        <Section title="Searching for results" body={<Loading />} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Section
          title="Sorry, there are no results..."
          body={<NotFound />}
        />
      </Container>
    );
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header title="Mulan long title" />
        <Rating />
      </HeaderWrapper>

      <Section body={<MovieTile />} />

      {/* <Section title="Cast" body={<ActorsList />} /> */}

      <Section title="Crew" />
    </Container>
  );
};
