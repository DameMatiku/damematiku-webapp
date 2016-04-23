import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMathSections } from '../../reducers/sections/actionCreators';
import { loadTags } from '../../reducers/tags/actionCreators';
import { status } from '../../reducers/tags/tags';
import LinearProgress from 'material-ui/LinearProgress';
import Tag from '../Tag/Tag';

class TagList extends Component {
  componentWillMount = () => {
    this.props.loadTags();
  };

  renderLoading = () => {
    return <LinearProgress mode="indeterminate"/>;
  };

  isSelected = (tagId) => this.props.selectedTags.some(x => x === tagId);

  /**
   * @todo REFACTOR!!!
   */
  renderLevels = (tags) => {
    let levels = [tags];
    let nextLevel;
    do {
      nextLevel = [];
      for (let tag of tags) {
        if (this.isSelected(tag.id)) {
          nextLevel = [ ...nextLevel, ...tag.subtags ];
        }
      }

      if (nextLevel.length > 0) {
        levels.push(Object.assign([], nextLevel));
        tags = Object.assign([], nextLevel);
      }
    } while (nextLevel.length > 0);

    return (
      <div>
        {levels.map((tags, i) => (
          <div key={i}>
            {tags.map((tag, key) => <Tag key={key} tag={tag} />)}
          </div>
        ))}
      </div>
    );
  };

  renderTree = () => {
    const { tags } = this.props;
    return this.renderLevels(tags);
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
  tags: state.tags.tags,
  selectedTags: state.tags.selected
});

const mapDispatchToProps = (dispatch, props) => ({
  loadTags: () => dispatch(loadTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
