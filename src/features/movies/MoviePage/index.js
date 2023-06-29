import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Rating } from "../../../components/Rating";
import { HeaderWrapper } from "./styled";
import { Section } from "../../../components/Section/index";
import { ActorsPage } from "../../actors/ActorsPage";
import { MovieTile } from "../MovieTile";

export const MoviePage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header title="Mulan long title" />
        <Rating />
      </HeaderWrapper>

      <Section
        body={<MovieTile />} />

      <Section
        title="Cast"
        body={<ActorsPage />}
      />

      <Section
        title="Crew"
        body={<ActorsPage />}
      />
    </Container>
  );
};