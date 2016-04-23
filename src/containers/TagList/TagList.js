import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTags } from '../../reducers/tags/actionCreators';
import { status } from '../../reducers/tags/tags';
import LinearProgress from 'material-ui/LinearProgress';

class TagList extends Component {
  componentWillMount = () => {
    this.props.loadTags();
  };

  renderLoading = () => {
    return <LinearProgress mode="indeterminate"/>;
  };

  renderTree = () => {
    const { tags } = this.props;
    return <pre>{JSON.stringify(tags)}</pre>;
  };

  render() {
    switch (this.props.status) {
      case status.LOADING:
        return this.renderLoading();
      case status.ERROR:
        return null;
      case status.LOADED:
        return this.renderTree();
    }
  }
}

const mapStateToProps = (state, props) => ({
  status: state.tags.status,
  tags: state.tags.tags
});

const mapDispatchToProps = (dispatch, props) => ({
  loadTags: () => dispatch(loadTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
