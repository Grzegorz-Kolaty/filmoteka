import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import { Tile } from "../../../components/Tile";
import useActorProfile from "./getActor";
import ActorCredits from "./getActorCredits";
import noProfilePic from "../../../components/images/noProfilePic.svg";

const API_IMG = "https://image.tmdb.org/t/p/w185";

export const ActorPage = () => {
  const profile = useActorProfile();

  console.log(profile);

  return (
    <Container>
      <Section actor
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
        } />
      <ActorCredits />
    </Container>
  );
};
