import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage";
import { MoviePage } from "./features/movies/MoviePage/index";

export const App = () => {
  return (
    <>
      <Navigation />
      <ActorsPage />
    </>
  );
};
