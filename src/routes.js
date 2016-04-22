import React from 'react';
import { Route } from 'react-router';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const Home = ({ children }) => (
  <div>
    <AppBar title={'Home'} />
    <div>
      {children}
    </div>
  </div>
);
const Contact = () => <h2>{'Contact'}</h2>;

export default (
  <Route path={'/'} component={Home}>
    <Route path={'contact'} component={Contact} />
  </Route>
);
