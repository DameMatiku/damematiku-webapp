import React from 'react';

import Voting from '../../containers/Voting/Voting';
import Youtube from 'react-youtube';
import AuthorView from '../AuthorView/AuthorView';

const VideoView = ({ video }) => (
  <div>
    <Voting video={video} />
    <Youtube videoId={video.youtubeId} />
    <AuthorView author={video.author} />
  </div>
);

export default VideoView;
