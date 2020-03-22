import { moviesActions } from "actions/movies";

const movies = (state = {moviesList:[]}, action) => {
    switch (action.type) {
      case moviesActions.ADD_MOVIES_LIST:
        return {...state,moviesList:[state.moviesList,...action.payload]};
      case moviesActions.REMOVE_MOVIES_LIST:
        return {...state,moviesList:[]};
      default:
        return state
    }
  }
  
  export { movies };