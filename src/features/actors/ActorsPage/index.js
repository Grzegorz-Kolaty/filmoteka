import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import { ActorsList } from "./ActorsList";

export const ActorsPage = () => {
  return (
    <Container>
      <Section title="Popular people"
        body={<ActorsList />} />
    </Container>
  );
};