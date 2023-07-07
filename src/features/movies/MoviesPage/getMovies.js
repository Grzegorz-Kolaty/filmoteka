import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { Item, List, Pagination } from "../../../components/Tile/styled";
import { Tile } from "../../../components/Tile";
import { Button, Pages } from "./styled";
import vectorImage from "../../../components/images/vector.svg";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/movie/popular";
const API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            language: "en-US",
            page: currentPage,
            api_key: API_KEY,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get(API_GENRES, {
          params: {
            language: "en-US",
            api_key: API_KEY,
          },
        });

        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
    fetchGenres();
  }, [currentPage]);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getMovieGenre = (genreIds) => {
    const movieGenres = genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : "";
    });

    const limitedGenres = movieGenres.slice(0, 3);

    return limitedGenres.join(", ");
  };

  const renderMovies = () => {
    return movies.map((movie) => (
      <Item key={movie.id}>
        <Tile
          info
          popular
          movieTitle={movie.title}
          movieDate={movie.release_date}
          movieGenre={getMovieGenre(movie.genre_ids)}
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
        body={
          <>
            <List row>{renderMovies()}</List>
            <Pagination>
              <Button onClick={handleFirstPage} disabled={currentPage === 1}>
                <img src={vectorImage} alt="vector" />
                First
              </Button>
              <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <img src={vectorImage} alt="vector" />
                Previous
              </Button>
              <Pages>
                <div>
                  Page {currentPage} of {totalPages}
                </div>
              </Pages>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <img
                  src={vectorImage}
                  alt="Next"
                  style={{ transform: "rotate(180deg)" }}
                />
              </Button>
              <Button
                onClick={handleLastPage}
                disabled={currentPage === totalPages}
              >
                Last
                <img
                  src={vectorImage}
                  alt="Last"
                  style={{ transform: "rotate(180deg)" }}
                />
              </Button>
            </Pagination>
          </>
        }
      />
    </Container>
  );
};

export default Movies;
