import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import useMovieSearch from "../../Search/useMovieSearch";
import { Loader } from "../../../common/Loader";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { NotFound } from "./styled";
import usePopularMovies from "./getPopularMovies";

export const MoviesPage = () => {
  const popularMovies = usePopularMovies();
  const searchedMovies = useMovieSearch();
  const { genres } = useGenres();
  const location = useLocation();

  const moviesToDisplay = location.search ? searchedMovies : popularMovies;
  const movies = moviesToDisplay?.movies || [];
  const loading = moviesToDisplay?.loading || false;
  const error = moviesToDisplay?.error || false;

  console.log(movies);

  if (loading) {
    return (
      <Container>
        <Section body={<Loader />} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div>Error...</div>
      </Container>
    );
  }

  return (
    <Container>
      {movies.length === 0 ? (
        <Section title="Sorry, there are no results" body={<NotFound />} />
      ) : (
        <Section movies
          title="Popular Movies"
          body={movies.map((movie) => (
            <Tile poster
              type="movie"
              id={movie.id}
              key={movie.id}
              img={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noProfilePic
              }
              title={movie.title}
              date={movie.release_date}
              genre={movie.genre_ids}
              genres={genres}
              rating={movie.vote_average}
              votes={movie.vote_count}
              overview={movie.overview}
            />
          ))}
        />
      )}
    </Container>
  );
};
