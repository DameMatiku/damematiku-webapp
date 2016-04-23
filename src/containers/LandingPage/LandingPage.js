import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagList from '../TagList/TagList';
import SectionsPage from '../../containers/SectionsPage/SectionsPage';
import Divider from 'material-ui/Divider';

class LandingPage extends Component {

  render() {
    return (
      <div>
        <Divider style={{ marginTop: 15, marginBottom: 5 }} />
        <TagList />
        <Divider style={{ marginBottom: 15, marginTop: 5 }} />

        <SectionsPage />
      </div>
    );
  }

}

export default connect()(LandingPage);
