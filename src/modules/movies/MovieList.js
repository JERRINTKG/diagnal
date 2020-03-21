import React, { Component } from "react";
import { MovieContainer } from "components/movies/movies.component";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieList: ["s", "d", "s", "d", "s", "d", "s", "d", "s", "d", "s", "d"]
    };
  }

  // goTo=()=>{
  //   this.props.history.push("/")
  // }

  // MovieListRender = ()=>{

  // }

  render() {
    let { MovieList } = this.state;
    return (
      <React.Fragment>
        <div className="grid grid-cols-3 gap-4">
          {MovieList.map((m, index) => {
            return <MovieContainer key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;
