import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import formsReducer from "../reducers/forms";
import { rootEpic } from "./root";

export default (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware();

  const enhancers = [
    applyMiddleware(thunk),
    applyMiddleware(epicMiddleware)
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

  epicMiddleware.run(rootEpic);

  return store;
};
