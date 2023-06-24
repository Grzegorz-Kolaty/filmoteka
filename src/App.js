import Navigation from "./common/Navigation/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";

const App = () => {
  return (
    <>
      <Navigation />
      <MoviesPage></MoviesPage>
    </>
  );
};

export default App;