import React from 'react';
import { Route } from 'react-router';

import Wrapper from './components/Wrapper';
import LandingPage from './containers/LandingPage/LandingPage';

const Contact = () => <h2>{'Contact'}</h2>;

export default (
  <Route component={Wrapper}>
    <Route path={'/'} component={LandingPage} />
    <Route path={'contact'} component={Contact} />
  </Route>
);
