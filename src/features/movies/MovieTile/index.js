import { useState, useEffect } from "react";
import axios from "axios";
import { Tile } from "../../../components/Tile";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/movie/";
const API_IMG = "https://image.tmdb.org/t/p/w500";

export const MovieTile = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieTile();
  }, []);

  const fetchMovieTile = async () => {
    try {
      const movieId = 337401; // Movie ID for Mulan
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
      img={`${API_IMG}${movie.poster_path}`} // Use the API_IMG variable to construct the image URL
      alt={movie.title}
      title={movie.title}
      subtitle={movie.release_date}
      subtitle2={movie.vote_average}
      description={movie.overview}
    />
  );
};
