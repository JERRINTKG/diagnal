import { createStore,combineReducers } from "redux";
import { movies } from "reducers/movies";
import { music } from "reducers/music";

const rootReducer = combineReducers({
  movies,
  music
});

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());