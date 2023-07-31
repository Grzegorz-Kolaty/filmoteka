import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import { Tile } from "../../../components/Tile";
import { useGenres } from "../../../components/Genre/getGenres";
import useActorProfile from "./getActor";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import useActorCredits from "./getActorCredits";

const API_IMG = "https://image.tmdb.org/t/p/w500";

export const ActorPage = () => {
  const personId = useLocation();
  const profile = useActorProfile(personId.pathname.toString());
  const { cast, crew } = useActorCredits(personId.pathname.toString());
  const { genres } = useGenres();

  return (
    <Container>
      <Section
        body={
          <Tile bigposter
            key={profile.id}
            img={
              profile.profile_path
                ? API_IMG + profile.profile_path
                : noProfilePic}
            overview={profile.biography}
            title={profile.name}
            date={profile.birthday}
            from={profile.place_of_birth}
          />
        }
      />

      <Section movies
        title={cast.length > 0 ? `Movies - cast (${cast.length})` : "No cast available 😥"}
        body={cast.length > 0 ? cast.map((cast) => (
          <Tile poster
            type="movie"
            id={cast.id}
            key={cast.id}
            img={
              cast.poster_path
                ? API_IMG + cast.poster_path
                : noProfilePic
            }
            subtitle={cast.character}
            title={cast.title}
            date={cast.release_date}
            genre={cast.genre_ids} genres={genres}
            rating={cast.vote_average}
            votes={cast.vote_count}
          />
        )) : null}
      />

      <Section movies
        title={crew.length > 0 ? `Movies - crew (${crew.length})` : "No crew available 😥"}
        body={crew.length > 0 ? crew.map((crew) => (
          <Tile poster
            type="movie"
            id={crew.id}
            key={crew.id}
            img={
              crew.poster_path
                ? API_IMG + crew.poster_path
                : noProfilePic
            }
            subtitle={crew.character}
            title={crew.title}
            date={crew.job}
            genre={crew.genre_ids} genres={genres}
            rating={crew.vote_average}
            votes={crew.vote_count}
          />
        )) : null}
      />

    </Container>
  );
};
