import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tags from './tags/tags';
import sections from './sections/sections';

export default combineReducers({
  tags,
  sections,
  routing: routerReducer
});

