import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloCache, InMemoryCache } from "@apollo/client";
import movieVar from "./stores/movies";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getMovies: {
          read() {
            return movieVar();
          },
        },
      },
    },
  },
})! as ApolloCache<any>;

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/",
});
export default apolloClient;
