
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/movie/";

export const MovieTile = () => {
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
    
      <div>
        <article>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div>
            <header>{movie.title}</header>
            <span>Release Date: {movie.release_date}</span>
            <br />
            <span>Rating: {movie.vote_average}</span>
            <p>{movie.overview}</p>
          </div>
        </article>
      </div>
    
  );
};
