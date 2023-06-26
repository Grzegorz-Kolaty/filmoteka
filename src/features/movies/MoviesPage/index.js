import { Section } from "../../../components/Section";
import { Header } from "../../../components/Header";
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
          <Header title="Searching for results" />
          <Section body={<Loading />} />
        </>
      ) : error ? (
        <>
          <Header title="Sorry, there are no results for Mulan" />
          <Section body={<NotFound />} />
        </>
      ) : (
        <>
          <Header title="Search result for Mulan(6)" />
          <Section body={<MoviesList />} />
        </>
      )}
    </Container>
  );
};