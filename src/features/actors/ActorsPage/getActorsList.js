import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tile } from "../../../components/Tile";
import noProfilePic from "../../../components/images/noProfilePic.svg";

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/popular";
const API_IMG = "https://image.tmdb.org/t/p/w185";

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            page: "6",
          },
        });

        setActors(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActors();
  }, []);

  console.log(actors);

  return (
    <>
      {actors.map((actor) => (
        <Tile smallposter
          key={actor.id}
          title={actor.name}
          img={
            actor.profile_path
              ? API_IMG + actor.profile_path
              : noProfilePic}
        />
      ))}
    </>
  );
};

export default ActorList;