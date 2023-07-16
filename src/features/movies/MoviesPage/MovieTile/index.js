import { useState, useEffect } from "react";
import axios from "axios";
import { Tile } from "../../../../components/Tile";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/movie/";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieTile();
  }, []);

  const fetchMovieTile = async () => {
    try {
      const movieId = 123; // Replace with the desired movie ID
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
      img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      title={movie.title}
      subtitle={movie.release_date}
      subtitle2={movie.vote_average}
      description={movie.overview}
    />
  );
};
