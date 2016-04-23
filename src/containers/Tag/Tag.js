import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadMathSections } from '../../reducers/sections/actionCreators';
import { loadTags, select as selectTag, unselect as unselectTag } from '../../reducers/tags/actionCreators';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Tag extends Component {

  onClick = () => {
    const { tag, isSelected, select, unselect, loadSections, selectedTags } = this.props;    
    if (isSelected) {
      unselect();
      loadSections(selectedTags.filter(t => t.id !== tag.id));
    } else {
      select();
      loadSections([ ...selectedTags, tag.id ]);
    }
  };

  render() {
    const { tag, isSelected } = this.props;
    return  isSelected
              ? <RaisedButton label={tag.name} onMouseUp={this.onClick} onTouchStop={this.onClick} />
              : <FlatButton label={tag.name} onMouseUp={this.onClick} onTouchStop={this.onClick} />;
  }
}

const mapStateToProps = (state, props) => ({
  isSelected: state.tags.selected.some(tag => tag === props.tag.id),
  selectedTags: state.tags.selected,
});
const mapDispatchToProps = (dispatch, props) => ({
  loadSections: (tags) => dispatch(loadMathSections(tags)),
  select: () => dispatch(selectTag(props.tag.id)),
  unselect: () => dispatch(unselectTag(props.tag.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
