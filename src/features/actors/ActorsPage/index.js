import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
// // import { ActorsList } from "./ActorsList";
// import ActorList from "./getActorsList";

import { Container } from "../../../components/Container";

export const ActorsPage = () => {
  return (
    <Container>
      <Section body={<ActorList />} />
    </Container>
  );
};