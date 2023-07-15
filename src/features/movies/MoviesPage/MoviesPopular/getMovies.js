import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGenres } from "../../../../components/Genre/getGenres";
import { Tile } from "../../../../components/Tile";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

export const MoviesPopular = () => {
  const [movies, setMovies] = useState([]);
  const { genres } = useGenres();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            language: "en-US",
            page: 1,
            api_key: API_KEY,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Tile poster
          key={movie.id}
          img={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : ""}
          title={movie.title}
          date={movie.release_date}
          genre={movie.genre_ids} genres={genres}
          rating={movie.vote_average} votes={movie.vote_count}
          overview={movie.overview}
        />
      ))}
    </>
  );
};