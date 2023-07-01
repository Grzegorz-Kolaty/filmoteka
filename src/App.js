import { Container } from "./components/Container";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./common/Navigation/index";
import { ActorsPage } from "./features/actors/ActorsPage/index";
import { MoviePage } from "./features/movies/MoviePage/index";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { ActorPage } from "./features/actors/ActorPage/index";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/actor" element={<ActorPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/" element={<MoviesPage />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};