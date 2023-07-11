import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Rating } from "../../../components/Rating";
import { Loading, NotFound } from "../MoviesPage/styled";
import { HeaderWrapper } from "./styled";
import { MovieTile } from "../MovieTile";
import axios from "axios";
import { useEffect, useState } from 'react';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_IMG = "https://image.tmdb.org/t/p/w1280";

export const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [headerImage, setHeaderImage] = useState('');

  useEffect(() => {
    const fetchHeaderImage = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/337401?api_key=${API_KEY}&language=en-US`
        );
        const imagePath = response.data.backdrop_path;
        setHeaderImage(`${API_IMG}${imagePath}`);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchHeaderImage();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Section title="Searching for results" body={<Loading />} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Section title="Sorry, there are no results..." body={<NotFound />} />
      </Container>
    );
  }

  return (
    <Container>
      <HeaderWrapper style={{ backgroundImage: `url(${headerImage})` }}>
        <Header title="Mulan long title" />
        <Rating />
      </HeaderWrapper>

      <Section body={<MovieTile />} />

      {/* <Section title="Cast" body={<ActorsList />} /> */}

      <Section title="Crew" />
    </Container>
  );
};
