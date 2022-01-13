import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter,
  HashRouter,
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import client from "./apolloClient";
import Detail from "./Detail";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:moveId" element={<Detail />} />
          </Routes>
          <div className="App" />
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
