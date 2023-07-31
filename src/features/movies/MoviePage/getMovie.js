import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState({});
  const [genreIds, setGenreIds] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`${API_URL}${movieId}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(response.data);
        setGenreIds(response.data.genres.map((genre) => genre.id));
        setProductionCountries(
          response.data.production_countries
            ? response.data.production_countries.map((country) => country.name).join(", ")
            : []
        );
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return { movie, genreIds, productionCountries, isLoading, isError };
};

export default useMovieDetails;