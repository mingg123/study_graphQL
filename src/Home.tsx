import { useQuery } from "@apollo/client";
import React from "react";
import { OperationVariables, Query, QueryResult } from "react-apollo";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "./queries";
import { addAllMovie, Movie } from "./stores/movies";

//stateless component
//컴포넌트안에 함수를 넣음.
const Home = () => {
  const addMovie = (movie: Movie[]) => {
    addAllMovie(movie);
  };
  return (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }: QueryResult<any, OperationVariables>) => {
        if (data) {
          // console.log(data);
          addMovie(data.movies as Movie[]);
          return data.movies.map((movie: Movie) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/details/${movie.id}`}
            >
              <img src={movie.medium_cover_image} />
              <h2 key={movie.id}>
                {movie.title}/ {movie.rating}
              </h2>
            </Link>
          ));
        } else return <div>loading</div>;
      }}
    </Query>
  );
};

export default Home;
