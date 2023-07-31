import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/";

const useActorCredits = (personId) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchActorCredits = () => {
      axios.get(`${API_URL}${personId}/movie_credits`, {
        params: {
          api_key: API_KEY,
        },
      })
        .then((response) => {
          setCast(response.data.cast);
          setCrew(response.data.crew);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchActorCredits();
  }, [personId]);

  return { cast, crew };
};

export default useActorCredits;
