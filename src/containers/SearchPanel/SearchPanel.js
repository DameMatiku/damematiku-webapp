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
      <div style={{ background: '#fff', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)', padding: 7, marginBottom: 20, borderRadius: 4 }}>
        <TextField
          fullWidth={true}
          style={{ width: '72%', marginRight: 15 }}
          onChange={(e) => this.setState({ query: e.target.value })}
          hintText={'Co potřebujete najít?'} />
        &nbsp;
        <RaisedButton
          label={'Hledat'}
          onMouseUp={this.onClick}
          primary={true}
          style={{ width: '18%' }}
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
