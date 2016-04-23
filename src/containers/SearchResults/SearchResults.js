import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    const { query } = this.props;
    return (
      <div>
        <p>Výsledky pro hledání: {query}</p>
        {/* @todo display the results */}        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.search.query,
  results: state.search.results
});

export default connect()(SearchResults);
