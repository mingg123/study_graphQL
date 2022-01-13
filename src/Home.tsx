import { useQuery } from "@apollo/client";
import React from "react";
import { OperationVariables, Query, QueryResult } from "react-apollo";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "./queries";

interface movies {
  id: number;
  title: String;
  rating: number;
  medium_cover_image: string;
}
//stateless component
//컴포넌트안에 함수를 넣음.
const Home = () => {
  return (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }: QueryResult<any, OperationVariables>) => {
        if (data) {
          console.log(data);
          return data.movies.map((movie: movies) => (
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
