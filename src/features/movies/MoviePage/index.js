import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Rating } from "../../../components/Rating";
import { HeaderWrapper } from "./styled";
import { Section } from "../../../components/Section/index";
import { MovieTile } from "../MovieTile";
import { Crew } from "../../actors/ActorsPage/Crew";

export const MoviePage = () => {
  const task = true;

  if (!task) {
    return (
      <Container>
        <div>Header z obrazkiem na full</div>
        <div>Header z obrazkiem na full</div>
        <div>Header z obrazkiem na full</div>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header title="Mulan long title" />
        <Rating />
      </HeaderWrapper>

      <Section body={<MovieTile />} />

      {/* <Section title="Cast" body={<ActorsList />} /> */}

      <Section title="Crew" body={<Crew />} />
    </Container>
  );
};
