import { Container } from "./components/Container";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage/index";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { ActorPage } from "./features/actors/ActorPage/index";
import { toActors, toMovies } from "./routes";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Container>
          <Route path={"/actor"}>
            <ActorPage />
          </Route>
          <Route path={"/movie"}>
            <MoviePage />
          </Route>
          <Route path={toActors()}>
            <ActorsPage />
          </Route>
          <Route path={toMovies()}>
            <MoviesPage />
          </Route>
          <Route path="/">
            <Redirect to={toMovies()} />
          </Route>
        </Container>
      </Switch>
    </HashRouter>
  );
};
