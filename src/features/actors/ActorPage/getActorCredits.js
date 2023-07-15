import React, { useState, useEffect } from 'react';
import axios from 'axios';
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { Section } from '../../../components/Section';
import { Tile } from '../../../components/Tile';
import { useGenres } from '../../../components/Genre/getGenres';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/1225/movie_credits";
const API_IMG = "https://image.tmdb.org/t/p/w185";

const ActorCredits = () => {
  const [credits, setCredits] = useState([]);
  const [crew, setCrew] = useState([]);
  const { genres } = useGenres();

  useEffect(() => {
    const fetchActorCredits = () => {
      axios
        .get(API_URL, {
          params: {
            api_key: API_KEY,
          },
        })
        .then((response) => {
          setCredits(response.data.cast);
          setCrew(response.data.crew);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchActorCredits();
  }, []);

  console.log(credits);

  return (
    <>
      <Section movies
        title={`Movies - cast (${credits.length})`}
        body={credits.map((credit) => (
          <Tile poster
            key={credit.id}
            img={
              credit.poster_path
                ? API_IMG + credit.poster_path
                : noProfilePic
            }
            subtitle={credit.character}
            title={credit.title}
            date={credit.release_date}
            genre={credit.genre_ids} genres={genres}
            rating={credit.vote_average} votes={credit.vote_count}
          />
        ))}
      />

      <Section movies
        title={`Movies - crew (${crew.length})`}
        body={crew.map((crew) => (
          <Tile poster
            key={crew.id}
            img={
              crew.poster_path
                ? API_IMG + crew.poster_path
                : noProfilePic
            }
            subtitle={crew.character}
            title={crew.title}
            date={crew.release_date}
            genre={crew.genre_ids} genres={genres}
            rating={crew.vote_average} votes={crew.vote_count}
          />
        ))}
      />
    </>
  );
};

export default ActorCredits;
