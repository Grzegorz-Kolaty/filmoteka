import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { ActorPage } from "./features/actors/ActorPage";
import { Container } from "./components/Container";
import { HashRouter, Route } from "react-router-dom/cjs/react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Route exact path="/actors" component={ActorsPage} />
        <Route exact path="/actor" component={ActorPage} />
        <Route exact path="/movie" component={MoviePage} />
        <Route exact path="/movies" component={MoviesPage} />
      </Container>
    </HashRouter>
  );
};
