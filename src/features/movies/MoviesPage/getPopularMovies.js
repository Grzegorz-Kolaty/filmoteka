import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

const usePopularMovies = (currentPage) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: currentPage,
          },
        });
        setLoading(true);

        const timer = setTimeout(() => {
          setMovies(response.data.results);
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
       
        setLoading(false);
        setError(true);
      }
    };

    fetchPopularMovies();
  }, [currentPage]);

  return { movies, loading, error };
};

export default usePopularMovies;
