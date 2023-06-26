import Navigation from "./common/Navigation/index";
import { MoviePage } from "./features/movies/MoviePage/index";

export const App = () => {
  return (
    <>
      <Navigation />
      <MoviePage />
    </>
  );
};