import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Rating } from "../../../components/Rating";
import { Loading, NotFound } from "../MoviesPage/styled";
import { HeaderWrapper } from "./styled";
import axios from "axios";
import { useEffect, useState } from 'react';
import { MovieTile } from "../MovieTile";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_IMG = "https://image.tmdb.org/t/p/w1280";
const API_PIC = "https://image.tmdb.org/t/p/w300"

export const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [headerImage, setHeaderImage] = useState('');
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await axios.get(
          `${API_URL}/movie/337401?api_key=${API_KEY}&language=en-US`
        );
        const imagePath = movieResponse.data.backdrop_path;
        setHeaderImage(`${API_IMG}${imagePath}`);

        const creditsResponse = await axios.get(
          `${API_URL}/movie/337401/credits?api_key=${API_KEY}&language=en-US`
        );
        const castData = creditsResponse.data.cast;
        const crewData = creditsResponse.data.crew;
        setCast(castData);
        setCrew(crewData);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchMovieData();
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

      <Section body={<MovieDetails />} />

      <Section
        title="Cast"
        body={cast.map((actor) => (
          <div key={actor.id}>
            <img src={`${API_PIC}${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      />

      <Section
        title="Crew"
        body={crew.map((member) => (
          <div key={member.id}>
            <img src={`${API_PIC}${member.profile_path}`} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      />
    </Container>
  );
};
