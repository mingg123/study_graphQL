import gql from "graphql-tag";
import React from "react";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
const queries = () => {};

export default queries;
