import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import useMovieSearch from "../../Search/useMovieSearch";
import { NotFound } from "./styled";
import { Loader } from "../../../common/Loader";

export const MoviesPage = () => {
  const { movies, loading } = useMovieSearch();
  const { genres } = useGenres();

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : movies.length === 0 ? (
        <>
          <Section title="Sorry, there are no results" body={<NotFound />} />
        </>
      ) : (
        <Section
          movies
          title="Popular Movies"
          body={movies.map((movie) => (
            <Tile
              poster
              key={movie.id}
              img={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : ""
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
