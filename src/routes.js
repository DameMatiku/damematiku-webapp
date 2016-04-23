import React from 'react';
import { Route } from 'react-router';

import Wrapper from './components/Wrapper';
import LandingPage from './containers/LandingPage/LandingPage';
import DetailPage from './containers/DetailPage/DetailPage';
import ChapterPage from './containers/ChapterPage/ChapterPage';
import UploadPage from './containers/UploadPage/UploadPage';

export default (
  <Route component={Wrapper}>
    <Route path={'/'} component={LandingPage} />
    <Route path={'/videos/:videoId'} component={DetailPage} />
    <Route path={'/chapters/:chapterId'} component={ChapterPage} />
    <Route path={'/upload'} component={UploadPage} />
  </Route>
);
