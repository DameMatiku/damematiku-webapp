import React from 'react';

import AppBar from 'material-ui/AppBar';
import UserAuthPanel from '../containers/UserAuthPanel/UserAuthPanel';
import SearchPanel from '../containers/SearchPanel/SearchPanel';
import TagList from '../containers/TagList/TagList';

const Wrapper = ({ children, title = 'Hlavní strana' }) => (
  <div className={'page'}>
    <AppBar
      title={title}
      iconElementLeft={<span></span>}
      iconElementRight={<UserAuthPanel />} />
    <div className={'pageContent'}>
      <SearchPanel />
      <hr />
      {children}
    </div>
  </div>
);

export default Wrapper;
