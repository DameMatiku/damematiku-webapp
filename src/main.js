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

import AppBar from 'material-ui/AppBar';

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBar title={'Dáme matiku'} />
  </MuiThemeProvider>
), document.getElementById('dame-matiku-root'));
