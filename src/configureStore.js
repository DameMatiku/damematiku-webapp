import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import devTools from 'remote-redux-devtools';
import reducer from './reducers';

export default function configureStore(initialState) {
  return createStore(reducer, initialState, compose(
    applyMiddleware(apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
