import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie";

const useMovieSearch = () => {
  const query = useQueryParameter(searchQueryParamName);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(SEARCH_API_URL, {
          params: {
            language: "en-US",
            page: 1,
            api_key: API_KEY,
            query: query || "",
          },
        });

        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading, error };
};

export default useMovieSearch;
