import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Item, List } from "../../../components/Tile/styled";
import { Tile } from "../../../components/Tile";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

const Movies = () => {
  const [movies, setMovies] = useState([]);

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

  const renderMovies = () => {
    return movies.map((movie) => (
      <Item key={movie.id}>
        <Tile
          info
          popular
          movieTitle={movie.title}
          img={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : ""
          }
        />
      </Item>
    ));
  };

  return (
    <Container>
      <Section
        title="Popular Movies"
        body={<List row>{renderMovies()}</List>}
      />
    </Container>
  );
};

export default Movies;
