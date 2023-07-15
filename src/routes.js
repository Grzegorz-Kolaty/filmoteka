export const toMovies = () => "/Movies";
export const toActors = () => "/Actors";

export const toMovie = ({ id } = { id: ":id" }) => `/movie/${id}`;
export const toActor = ({ id } = { id: ":id" }) => `/actor/${id}`;
