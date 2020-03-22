import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { MovieContainer } from "components/movies/movies.component";
import { getMoviesList } from "./services";

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
        this.setState({ MovieList: data['page']["content-items"]["content"] });
        debugger
      })
      .catch(data => {
        // console.log(data);
      });
  };

  render() {
    let { MovieList } = this.state;
    return (
      <Container>
        <div className="header"></div>
        <div className="grid grid-cols-3 gap-4">
          {MovieList.map((m, index) => {
            return <MovieContainer key={index} movie={m} />;
          })}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    moviesList: state.movies.moviesList,
  }
}

export default connect(mapStateToProps)(MovieList);

