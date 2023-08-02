import { Container } from "../../../components/Container";
import { Section } from "../../../components/Section";
import useActorList from "./useActorsList";
import noProfilePic from "../../../components/images/noProfilePic.svg";
import { Tile } from "../../../components/Tile";
import { Loader } from "../../../common/Loader";
import { NotFound } from "../../movies/MoviesPage/styled";
import useActorSearch from "../../Search/useActorSearch";
import { Pagination } from "../../../components/Pagination";
import { useEffect, useState } from "react";
import { Error } from "../../../common/Error";
import {
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useQueryParameter } from "../../queryParameters";

export const ActorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    history.push(`${location.pathname}?page=${newPage}`);
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    setCurrentPage(page);
  }, [location.search]);

  const popularActors = useActorList(currentPage);
  const searchedActors = useActorSearch();
  const API_IMG = "https://image.tmdb.org/t/p/w185";

  const query = useQueryParameter("search");
  const actorsToDisplay = query ? searchedActors : popularActors;
  const actors = actorsToDisplay?.actors || [];
  const loading = actorsToDisplay?.loading || false;
  const error = actorsToDisplay?.error || false;

  if (loading) {
    return (
      <Container>
        <Section body={<Loader />} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Section body={<Error />} />
      </Container>
    );
  }

  return (
    <Container>
      {actors.length === 0 ? (
        <Section title="Sorry, there are no results" body={<NotFound />} />
      ) : (
        <Section
          actors
          title={location.search ? "Search Results" : "Popular Actors"}
          body={actors.map((actor) => (
            <Tile
              smallposter
              key={actor.id}
              id={actor.id}
              title={actor.name}
              img={
                actor.profile_path ? API_IMG + actor.profile_path : noProfilePic
              }
            />
          ))}
        />
      )}
      {actors.length > 0 && (
        <Pagination page={currentPage} onPageChange={handlePageChange} />
      )}
    </Container>
  );
};
