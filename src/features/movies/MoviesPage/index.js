// import { useSelector } from "react-redux";
// import { selectMovies } from "../moviesSlice";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { MoviesList } from "./MoviesList";
import { NotFound, Loading } from "./styled";

export const MoviesPage = () => {
  //const movies = useSelector(selectMovies);
  //const movies = 0;
  const loading = false;
  const error = true;

  return (
    <Container>
      {loading ? (
        <Section body={<Loading />} />
      ) : error ? (
        <>
          <Header title="Sorry, there are no results for Mulan" />
          <Section body={<NotFound />} />
        </>
      ) : (
        <>
          <Header title="Search result for Mulan" />
          <Section body={<MoviesList />} />
        </>
      )}
    </Container>
  );
};

export default MoviesPage;