import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import formsReducer from "../reducers/forms";

export default (initialState = {}) => {
  const enhancers = [
    applyMiddleware(thunk)
  ];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    combineReducers({
      forms: formsReducer,
    }), initialState,
    compose(...enhancers)
  );

  return store;
};
