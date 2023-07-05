import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import ActorProfile from "./getActor";

export const ActorPage = () => {
  return (
    <Container>
      <Section body={<ActorProfile />} />
      <Section
        title="Movies - cast(4)" />
      <Section
        title="Movies crew(4)" />
    </Container>
  );
};
