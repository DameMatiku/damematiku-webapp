import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagList from '../TagList/TagList';
import SectionView from '../../components/SectionView/SectionView';

class LandingPage extends Component {

  render() {
    return (
      <div>
        <h1>Landing page</h1>
        <TagList />
      </div>
    );
  }

}

export default connect()(LandingPage);
