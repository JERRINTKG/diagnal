import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Home from "modules/home/Home";
import MoviesRoutes from "routes/movies.routes";
// import MusicRoutes from "routes/music.routes";
const history = createHistory();

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <MoviesRoutes />
        {/* <MusicRoutes /> */}
      </Switch>
    </Router>
  );
};

export default MainRoute;
