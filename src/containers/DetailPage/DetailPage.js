import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoView from '../../components/VideoView/VideoView';
import { loadVideo } from '../../reducers/videos/videos';
import LinearProgress from 'material-ui/LinearProgress';

class DetailPage extends Component {

  componentWillMount = () => {
    const { video } = this.props;
    if (!video) {
      this.props.loadVideo();
    }
  };

  renderLoading = () => {
    return <LinearProgress mode="indeterminate"/>;    
  };

  renderVideo = () => {

  };

  renderError = () => {

  };

  render() {
    const { status, video } = this.props;
    switch (status) {
      case 'LOADING':

      case 'LOADED':
        return <VideoView video={video} />;
      default:
        return 'Detail error';
    }
  }

}

const mapStateToProps = (state) => ({
  video: state.videos,
  status: state.videos.status
});
const mapDispatchToProps = (dispatch, props) => ({
  loadVideo: () => dispatch(loadVideo(props.params.schoolId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
