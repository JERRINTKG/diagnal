import React from "react";
import { Route } from "react-router";
import MovieList from "modules/movies/MovieList";

const MoviesRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/movies" component={MovieList} />
    </React.Fragment>
  );
};

export default MoviesRoutes;