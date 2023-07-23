import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/popular";

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            page: "350",
          },
        });

        setTimeout(() => {
          setActors(response.data.results);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActors();
  }, []);

  return actors;
};

export default ActorList;