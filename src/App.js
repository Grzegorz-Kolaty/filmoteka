import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage/index";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { ActorPage } from "./features/actors/ActorPage/index";
import { Container } from "./components/Container";
import { HashRouter, Routes } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes exact path="/actors" component={ActorsPage} />
        <Routes exact path="/actor" component={ActorPage} />
        <Routes exact path="/movie" component={MoviePage} />
        <Routes exact path="/movies" component={MoviesPage} />
      </Container>
    </HashRouter>
  );
};