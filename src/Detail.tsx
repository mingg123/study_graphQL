import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Query } from "react-apollo";
import { useReactiveVar } from "@apollo/client";
import movieVar, { clickedmovieVar, getMovie, Movie } from "./stores/movies";
const Detail = () => {
  const params = useParams();
  const movie = useReactiveVar(movieVar);
  const moveId = Number(params.moveId);
  getMovie(moveId);
  const newMovie = useReactiveVar(clickedmovieVar);

  return (
    <>
      {/* {params.moveId} */}
      {newMovie && (
        <>
          <img src={newMovie.medium_cover_image} />
          <h2 key={newMovie.id}>
            {newMovie.title}/ {newMovie.rating}
          </h2>
        </>
      )}
    </>
  );
};
export default Detail;
