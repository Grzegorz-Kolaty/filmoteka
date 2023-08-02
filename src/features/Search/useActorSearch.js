import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/search/person";

const useActorSearch = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            query: query || "",
          },
        });

        setActors(response.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchActors();
  }, [query]);

  return { actors, loading, error };
};

export default useActorSearch;
