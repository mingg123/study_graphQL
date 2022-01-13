import { getMovies } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
  //   Mutation: {
  //     addMovie: (_, { name, score }) => addMovie(name, score),
  //     deleteMovie: (_, { id }) => deleteMovie(id),
  //   },
};

export default resolvers;
