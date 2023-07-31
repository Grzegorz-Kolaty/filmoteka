import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage/index";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { ActorPage } from "./features/actors/ActorPage/index";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { toActors, toMovies } from "./routes";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/person/:id">
          <ActorPage />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path={toActors()}>
          <ActorsPage />
        </Route>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
