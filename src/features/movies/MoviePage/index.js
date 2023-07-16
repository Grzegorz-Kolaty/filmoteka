import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Rating } from "../../../components/Rating";
import { Loading, NotFound } from "../MoviesPage/styled";
import { HeaderWrapper } from "./styled";
import { MovieDetails } from "../../movies/MoviesPage/MovieTile";
import { Tile } from "../../../components/Tile";
import noProfilePic from "../../../components/images/noProfilePic.svg";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "991805bb8d078db21dd78fe533903f2b";
const API_IMG = "https://image.tmdb.org/t/p/w1280";
const API_PIC = "https://image.tmdb.org/t/p/w185";

export const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [headerImage, setHeaderImage] = useState("");
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [crew, setCrew] = useState([]);
  

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await axios.get(
          `${API_URL}/movie/337401?api_key=${API_KEY}&language=en-US`
        );
        const imagePath = movieResponse.data.backdrop_path;
        setHeaderImage(`${API_IMG}${imagePath}`);
        setMovie(movieResponse.data);
       

        const creditsResponse = await axios.get(
          `${API_URL}/movie/337401/credits?api_key=${API_KEY}&language=en-US`
        );
        const castData = creditsResponse.data.cast;
        const crewData = creditsResponse.data.crew;
        setCredits(castData);
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
        <Header title={movie.title} />
        <Rating rating={movie.vote_average} votes={movie.vote_count} /> {/* Updated Rating component */}
      </HeaderWrapper>

      <Section body={<MovieDetails />} />

      <Section actors
        title={`Cast (${credits.length})`}
        body={credits.map((credit) => (
          <Tile
            smallposter
            key={credit.id}
            img={
              credit.profile_path
                ? `${API_PIC}${credit.profile_path}`
                : noProfilePic
            }
            title={credit.name}
            from={credit.character}
          />
        ))}
      />

      <Section actors
        title={`Crew (${crew.length})`}
        body={crew.map((member) => (
          <Tile
            key={member.id}
            img={
              member.profile_path
                ? `${API_PIC}${member.profile_path}`
                : noProfilePic
            }
            title={member.name}
            from={member.job}
          />
        ))}
      />
    </Container>
  );
};
