import React, { useState, useEffect } from "react";
import { useGenres } from "../../../components/Genre/getGenres";
import { Tile } from "../../../components/Tile";
import useMovieSearch from "../../Search/useMovieSearch";
import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import { Loading, NotFound } from "./styled";

const useInitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
};

export const MoviesPage = () => {
  const { movies } = useMovieSearch();
  const { genres } = useGenres();
  const { error } = useState();
  const isLoading = useInitialLoading();

  if (isLoading) {
    return (
      <Container>
        <Section title="Searching for results" body={<Loading />} />
      </Container>
    );
  }

  return (
    <Container>
      {error ? (
        <div>Error...</div>
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
