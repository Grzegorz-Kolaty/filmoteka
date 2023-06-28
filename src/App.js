import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage";
import { MoviesList } from "./features/movies/MoviesPage/MoviesList";

export const App = () => {
  return (
    <>
      <Navigation />
      <MoviesList />
    </>
  );
};
