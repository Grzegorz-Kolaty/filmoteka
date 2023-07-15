import { useEffect, useState } from "react";
import axios from "axios";

const API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";

export const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(API_GENRES, {
          params: {
            api_key: API_KEY,
          },
        });
        const { data } = response;
        setGenres(data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return { genres };
};
