import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/popular";

const useActorList = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            page: 1,
          },
        });

        const timer = setTimeout(() => {
          setActors(response.data.results);
          setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchActors();
  }, []);

  return { actors, loading, error };
};

export default useActorList;
