import { makeVar } from "@apollo/client";

export interface Movie {
  id: number | null;
  title: string;
  rating: number | null;
  medium_cover_image: string;
}

const movieCounterVar = makeVar(0);
const movieVar = makeVar<Movie[]>([]);
export const clickedmovieVar = makeVar<Movie>({
  id: null,
  title: "",
  rating: null,
  medium_cover_image: "",
});

export const addAllMovie = (movie: Movie[]) => {
  movieVar(movie);
};

export const getMovie = (id: number) => {
  const currentMovie = [...movieVar()];
  const tempMovie = currentMovie && currentMovie.find((temp) => temp.id == id);
  clickedmovieVar(tempMovie);
  console.log(clickedmovieVar().id);
};
export default movieVar;
