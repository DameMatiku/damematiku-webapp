import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import devTools from 'remote-redux-devtools';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = compose(
  applyMiddleware(apiMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
