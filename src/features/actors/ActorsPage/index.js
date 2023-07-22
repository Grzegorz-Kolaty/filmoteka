import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import useActorList from "./useActorsList";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { Tile } from "../../../components/Tile";
import { Loader } from "../../../common/Loader";

export const ActorsPage = () => {
  const actors = useActorList();
  const API_IMG = "https://image.tmdb.org/t/p/w185";

  console.log(actors.length);

  return (
    <Container>
      {actors.length <= 0
        ? <Section body={<Loader />} />
        : <Section actors
          title="Popular Actors"
          body={
            actors.map((actor) => (
              <Tile smallposter
                key={actor.id}
                title={actor.name}
                img={actor.profile_path
                  ? API_IMG + actor.profile_path
                  : noProfilePic}
              />
            ))
          }
        />
      }
    </Container>
  );
};