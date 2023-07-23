import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/122503";

const useActorProfile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchActorProfile = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
          },
        });

        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActorProfile();
  }, []);

  return profile
};

export default useActorProfile;
