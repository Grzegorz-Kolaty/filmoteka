import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { MoviesList } from "./MoviesList";
import { NotFound, Loading } from "./styled";

export const MoviesPage = () => {
  const loading = false;
  const error = false;

  return (
    <Container>
      {loading ? (
        <>
          <Section title="Searching for results" body={<Loading />} />
        </>
      ) : error ? (
        <>
          <Section
            title="Sorry, there are no results for Mulan"
            body={<NotFound />}
          />
        </>
      ) : (
        <>
          <Section title="Search result for Mulan(6)" body={<MoviesList />} />
        </>
      )}
    </Container>
  );
};
