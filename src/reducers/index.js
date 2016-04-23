import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sections from './sections/sections';
import authentication from './authentication/authentication';
import authors from './authors/authors';
import chapters from './chapters/chapters';
import featuredVideos from './featuredVideos/featuredVideos';
import search from './search/search';
import tags from './tags/tags';
import videos from './videos/videos';
import voting from './voting/voting';

export default combineReducers({
  sections,
  authentication,
  authors,
  chapters,
  featuredVideos,
  search,
  tags,
  videos,
  voting,
  routing: routerReducer
});
