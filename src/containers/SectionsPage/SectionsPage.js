import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LinearProgress from 'material-ui/LinearProgress';
import { loadMathSections } from '../../reducers/sections/actionCreators';
import SectionView from '../../components/SectionView/SectionView';

class SectionsPage extends Component {

  componentWillMount = () => {
    const { sections, tags, loadSections } = this.props;
    if (sections.length === 0) {
      loadSections(tags);
    }
  };

  componentWillReceiveProps = (newProps) => {
    if (this.props.tags !== newProps.tags) {
      newProps.loadSections(newProps.tags);
    }
  };

  renderLoading = () => (
    <LinearProgress mode="indeterminate"/>
  );

  renderSections = () => {
    const { sections, viewChapter } = this.props;
    return (
      <div>
        {sections.map((section, key) =>
          <SectionView section={section} key={key} n={key + 1} viewChapter={viewChapter} />)}
      </div>
    );
  };

  render() {
    switch (this.props.status) {
      case 'LOADING':
        return this.renderLoading();
      case 'LOADED':
        return this.renderSections();
      default:
        // return this.renderError();
    }
  }

}

const mapStateToProps = (state) => ({
  status: state.sections.status,
  sections: state.sections.sections,
  tags: state.tags.selected
});
const mapDispatchToProps = (dispatch, props) => ({
  loadSections: (tags) => dispatch(loadMathSections(tags)),
  viewChapter: (chapter) => window.location = `/#/chapters/${chapter.id}`
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionsPage);
