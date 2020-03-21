import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
        <Link to="/movies">Go to movie list</Link>
      </React.Fragment>
    );
  }
}

export default Home;
