import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "bcf20e98fe4a34fff9d2e944e0f0cd1d";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            language: "en-US",
            page: 1,
            api_key: API_KEY,
          },
        });

        setTimeout(() => {
          setPopularMovies(response.data.results);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return popularMovies;

};

export default usePopularMovies;