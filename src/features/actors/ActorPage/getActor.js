import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tile } from '../../../components/Tile';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/122503";
const API_IMG = "https://image.tmdb.org/t/p/w500";

const ActorProfile = () => {
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

  console.log(profile);

  return (
    <Tile person
      img={API_IMG + profile.profile_path}
      title={profile.name}
      subtitle="Date of birth: "
      subtitleText={profile.birthday}
      subtitle2="Place of birth: "
      subtitleText2={profile.place_of_birth}
      description={profile.biography}
    />
  );
};

export default ActorProfile;
