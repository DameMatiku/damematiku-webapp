// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppBar from 'material-ui/AppBar';

const initialState = undefined; // @todo
const store = configureStore(initialState);

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AppBar title={'Dáme matiku'} />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('dame-matiku-root'));
