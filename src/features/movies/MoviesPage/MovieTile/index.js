import { useState, useEffect } from "react";
import axios from "axios";
import { Tile } from "../../../../components/Tile";
import { useGenres } from "../../../../components/Genre/getGenres";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/movie/";
const API_IMG = "https://image.tmdb.org/t/p/w500";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { genres } = useGenres();
  useEffect(() => {
    fetchMovieTile();
  }, []);

  const fetchMovieTile = async () => {
    try {
      const movieId = 337401;
      const response = await axios.get(
        `${API_URL}${movieId}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    } catch (error) {
      console.log("An error occurred while fetching the data:", error);
    }
  };

  if (!movie) {
    return <div>Loading data...</div>;
  }

  return (
    <Tile
      bigposter
      img={`${API_IMG}${movie.poster_path}`}
      title={movie.title}
      date={movie.release_date}
      votes={movie.vote_count}
      overview={movie.overview}
      rating={movie.vote_average}
      genre={movie.genre_ids}
      genres={genres}
    />
  );
};
