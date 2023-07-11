import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tile } from '../../../components/Tile';
import { Item, List } from '../../../components/Tile/styled';
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { Section } from '../../../components/Section';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/122503/movie_credits";
const API_IMG = "https://image.tmdb.org/t/p/w500";

export const ActorCredits = () => {
  const [credits, setCredits] = useState([]);
  const [crew, setCrew] = useState([]);

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
      <Section title={`Movies - cast (${credits.length})`}
        body={
          <List row>
            {credits.map((credit) => (
              <Item key={credit.id}>
                <Tile popular
                  titleSmall={credit.title}
                  subtitle={credit.character}
                  img={credit.poster_path
                    ? API_IMG + credit.poster_path
                    : noProfilePic}
                  movieGenre={credit.genre_ids}
                  rating={credit.vote_average === 0
                    ? "0"
                    : credit.vote_average}
                  votes={credit.vote_count}>
                </Tile>
              </Item>
            ))}
          </List>
        }
      />

      <Section title={`Movies - crew (${crew.length})`}
        body={
          <List row>
            {crew.map((crew) => (
              <Item key={crew.id}>
                <Tile popular
                  titleSmall={crew.title}
                  img={crew.poster_path
                    ? API_IMG + crew.poster_path
                    : noProfilePic
                  } />
              </Item>
            ))}
          </List>
        }
      />
    </>
  );
};

export default ActorCredits;
