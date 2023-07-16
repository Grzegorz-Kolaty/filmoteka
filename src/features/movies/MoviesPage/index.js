import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { NotFound, Loading } from "./styled";
import { MoviesPopular } from "./MoviesPopular/getMovies";

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
          <Section movies
            title="Popular Movies"
            body={<MoviesPopular />} />
        </>
      )}
    </Container>
  );
};
