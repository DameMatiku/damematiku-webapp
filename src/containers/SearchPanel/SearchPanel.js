import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { performSearch } from '../../reducers/search/actionCreators'

class SearchPanel extends Component {

  state = { query: '' };

  onClick = () => {
    const { search } = this.props;
    search(this.state.query);
  };

  render() {
    return (
      <div>
        <TextField
          onChange={(e) => this.setState({ query: e.target.value })}
          floatingLabelText="Co potřebujete najít?" />
        <RaisedButton
          label={'Hledat'}
          onMouseUp={this.onClick}
          onTouchEnd={this.onClick}
          disabled={!this.state.query || this.state.query.length === 0} />
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = (dispatch, props) => ({
  search: (query) => dispatch(performSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
