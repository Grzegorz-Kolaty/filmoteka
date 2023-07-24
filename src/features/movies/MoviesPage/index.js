import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import useMovieSearch from "../../Search/useMovieSearch";
import { Loader } from "../../../common/Loader";
import usePopularMovies from "./MoviesPopular/usePopularMovies";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import noProfilePic from "../../../components/images/noProfilePic.svg";

export const MoviesPage = () => {
  const popularMovies = usePopularMovies();
  const searchedMovies = useMovieSearch();
  const { genres } = useGenres();
  const location = useLocation();

  let moviesToDisplay = location.search ? searchedMovies : popularMovies;

  return (
    <Container>
      {moviesToDisplay.length <= 0
        ? <Section body={<Loader />} />
        : <Section movies
          title="Popular Movies"
          body={moviesToDisplay.map((movie) => (
            <Tile poster
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
      }
    </Container>
  );
};
