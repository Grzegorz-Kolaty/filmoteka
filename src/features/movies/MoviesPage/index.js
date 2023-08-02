import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import { Loader } from "../../../common/Loader";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { NotFound } from "./styled";
import { Error } from "../../../common/Error";
import usePopularMovies from "./getPopularMovies";
import { Pagination } from "../../../components/Pagination";
import { useQueryParameter } from "../../queryParameters";
import useMovieSearch from "../../Search/useMovieSearch";

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    history.push(`${location.pathname}?page=${newPage}`);
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    setCurrentPage(page);
  }, [location.search]);

  const popularMovies = usePopularMovies(currentPage);
  const searchedMovies = useMovieSearch();
  const { genres } = useGenres();

  const query = useQueryParameter("search"); // Odczytaj wartość parametru "search"
  const moviesToDisplay = query ? searchedMovies : popularMovies; // Wybierz odpowiednie filmy na podstawie wartości "search"
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
        <Section body={<Error />} />
      </Container>
    );
  }

  return (
    <Container>
      {movies.length === 0 ? (
        <Section title="Sorry, there are no results" body={<NotFound />} />
      ) : (
        <Section
          movies
          title="Popular Movies"
          body={movies.map((movie) => (
            <Tile
              poster
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
      {movies.length > 0 && (
        <Pagination page={currentPage} onPageChange={handlePageChange} />
      )}
    </Container>
  );
};

export default MoviesPage;
