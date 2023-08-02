import React, { useState, useEffect } from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import useMovieSearch from "../../Search/useMovieSearch";
import { Loader } from "../../../common/Loader";
import { useLocation, useHistory } from "react-router-dom";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { NotFound } from "./styled";
import { Error } from "../../../common/Error";
import usePopularMovies from "./getPopularMovies";
import { Pagination } from "../../../components/Pagination";
import { useQueryParameter } from "../../queryParameters";

export const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
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

  const query = useQueryParameter("search");
  const moviesToDisplay = query ? searchedMovies : popularMovies;
  const movies = moviesToDisplay?.movies || [];
  const loading = moviesToDisplay?.loading || false;

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setError(!navigator.onLine);
    };

    window.addEventListener("offline", handleOnlineStatusChange);
    window.addEventListener("online", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("offline", handleOnlineStatusChange);
      window.removeEventListener("online", handleOnlineStatusChange);
    };
  }, []);

  if (loading) {
    return (
      <Container>
        <Section body={<Loader />} />
      </Container>
    );
  }

  if (error && !navigator.onLine) {
    return (
      <Container>
        <Section
          body={
            <Error message="No internet connection. Please check your internet connection and try again." />
          }
        />
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
              date={
                movie.release_date ? movie.release_date.substring(0, 4) : ""
              }
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
