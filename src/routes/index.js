import React from "react";
import { Route,Router } from "react-router";
import { createBrowserHistory as createHistory } from 'history'
import Home from "modules/home/Home";
import MoviesRoutes from "routes/movies.routes";
// import MusicRoutes from "routes/music.routes";
const history = createHistory();

const MainRoute = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <MoviesRoutes />
      {/* <MusicRoutes /> */}
    </Router>
  );
};

export default MainRoute;
