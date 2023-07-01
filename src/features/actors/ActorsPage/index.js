import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
// import { ActorsList } from "./ActorsList";
import ActorList from "./getActorsList";

export const ActorsPage = () => {
  return (
    <Container>
      <Section body={<ActorList />} />
    </Container>
  );
};