import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import ActorProfile from "./getActor";
import ActorCredits from "./getActorCredits";

export const ActorPage = () => {
  return (
    <Container>
      <Section body={<ActorProfile />} />
      <ActorCredits />
    </Container>
  );
};
