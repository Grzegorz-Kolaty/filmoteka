import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";

const useMovieCredits = (movieId) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`${API_URL}${movieId}/credits`, {
          params: {
            api_key: API_KEY,
          },
        });
        setCast(response.data.cast);
        setCrew(response.data.crew);
        setIsLoading(false);

      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return { cast, crew, isLoading, isError };
};

export default useMovieCredits;
