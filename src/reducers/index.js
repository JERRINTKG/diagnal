import { createStore,combineReducers } from "redux";
import { movies } from "reducers/movies";

const rootReducer = combineReducers({
  movies
});

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());