import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';

const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_URL = "https://api.themoviedb.org/3/person/popular";

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            language: 'en-US',
            page: '1',
            api_key: API_KEY,
          },
        });

        setActors(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActors();
  }, []);

  console.log(actors)

  return (
    <Container>
      <Section title="Popular Actors" />
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ActorList;
