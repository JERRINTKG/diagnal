import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { MovieContainer } from "components/movies/movies.component";
import { getMoviesList } from "./services";
import { moviesActions } from "actions/movies";

const Container = styled.div`
  background-color: black;
  padding: 3px;
  header {
    width: 100px;
    height: 50px;
    color: red;
  }
`;
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieList: []
    };
  }

  // goTo=()=>{
  //   this.props.history.push("/")
  // }

  componentDidMount = () => {
    getMoviesList()
      .then(data => {
        // console.log(data['page']["content-items"]["content"]);
        this.props.dispatch({type:moviesActions.ADD_MOVIES_LIST,payload:data['page']["content-items"]["content"]});
        // this.setState({ MovieList: data['page']["content-items"]["content"] });
      })
      .catch(data => {
        // console.log(data);
      });
  };

  render() {
    const { moviesList } = this.props.movies;
    return (
      <Container>
        <div className="header"></div>
        <div className="grid grid-cols-3 gap-4">
          {moviesList.map((m, index) => {
            return <MovieContainer key={index} movie={m} />;
          })}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps)(MovieList);

