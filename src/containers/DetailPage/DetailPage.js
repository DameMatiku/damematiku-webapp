import React, { Component } from 'react';

class DetailPage extends Component {

  componentWillMount = () => {
    const { video, loadVideo, videoId } = this.props;
  };

  render() {
    return <b>VIDEO</b>;
  }

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
