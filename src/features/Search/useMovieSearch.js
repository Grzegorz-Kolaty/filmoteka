import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/search/movie";

const useMovieSearch = () => {
  const query = useQueryParameter(searchQueryParamName);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        if (query) {
          const response = await axios.get(API_URL, {
            params: {
              api_key: API_KEY,
              language: "en-US",
              query: query,
              page: 1,
            },
          });

          setMovies(response.data.results);
        } else {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
              params: {
                api_key: API_KEY,
                language: "en-US",
                page: 1,
              },
            }
          );

          setMovies(response.data.results);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading };
};

export default useMovieSearch;
