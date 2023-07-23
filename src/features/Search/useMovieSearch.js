import { useEffect, useState } from "react";
import axios from "axios";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/search/movie";

const useMovieSearch = () => {
  const query = useQueryParameter(searchQueryParamName);
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            query: query,
            page: 1,
          },
        });

        setTimeout(() => {
          setSearchedMovies(response.data.results);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [query]);

  return searchedMovies;
};

export default useMovieSearch;