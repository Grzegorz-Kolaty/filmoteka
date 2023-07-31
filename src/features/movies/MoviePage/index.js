import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Rating } from "../../../components/Rating";
import { HeaderWrapper, ItemsWrapper } from "./styled";
import { Tile } from "../../../components/Tile";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import useMovieDetails from "./getMovie";
import useMovieCredits from "./getMovieCredits";
import { useGenres } from "../../../components/Genre/getGenres";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const API_HEADER_IMG = "https://image.tmdb.org/t/p/w1280";

export const MoviePage = () => {
  const movieId = useLocation();
  const { movie, genreIds, productionCountries } = useMovieDetails(movieId.pathname.toString());
  const { cast, crew } = useMovieCredits(movieId.pathname.toString());
  const { genres } = useGenres();

  return (
    <Container>
      <HeaderWrapper
        img={movie.backdrop_path
          ? API_HEADER_IMG + movie.backdrop_path
          : noProfilePic}>
        <ItemsWrapper>
          <Header title={movie.title} />
          <Rating header rating={movie.vote_average} votes={movie.vote_count} />
        </ItemsWrapper>
      </HeaderWrapper>

      <Section
        body={
          <Tile bigposter
            type="movie"
            img={movie.poster_path
              ? `${API_IMG}${movie.poster_path}`
              : noProfilePic}
            title={movie.title}
            date={movie.release_date}
            votes={movie.vote_count}
            overview={movie.overview}
            rating={movie.vote_average}
            genre={genreIds}
            genres={genres}
            from={productionCountries}
          />}
      />

      <Section actors
        title={cast.length > 0 ? `Cast (${cast.length})` : "No cast available 😥"}
        body={cast.length > 0 ? cast.map((cast) => (
          <Tile smallposter
            id={cast.id}
            key={cast.id}
            img={
              cast.profile_path
                ? `${API_IMG}${cast.profile_path}`
                : noProfilePic}
            title={cast.name}
            from={cast.character}
          />
        )) : null}
      />

      <Section actors
        title={crew.length > 0 ? `Crew (${crew.length})` : "No crew available 😥"}
        body={crew.length > 0 ? crew.map((member) => (
          <Tile smallposter
            id={member.id}
            key={member.id}
            img={
              member.profile_path
                ? `${API_IMG}${member.profile_path}`
                : noProfilePic}
            title={member.name}
            from={member.job}
          />
        )) : null}
      />
    </Container>
  );
};
