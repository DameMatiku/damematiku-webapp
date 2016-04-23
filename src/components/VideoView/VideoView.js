import React from 'react';

import Voting from '../../containers/Voting/Voting';
import Youtube from 'react-youtube';
import Card, { CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AuthorView from '../AuthorView/AuthorView';

const VideoView = ({ video }) => (
  <div>
    <div>
      <Youtube videoId={video.youtubeId} opts={{ width: '100%', height: 500 }} />
      <div>
        <div style={{ width: '50%', display: 'inline-block', height: 40, lineHeight: 1 }}>
          <AuthorView author={video.author} />
        </div>
        <div style={{ width: '50%', display: 'inline-block', height: 40, lineHeight: 1 }}>
          <Voting video={video} />
        </div>
      </div>
    </div>
    <Divider style={{ marginTop: 20, marginBottom: 25 }} />
  </div>
);

export default VideoView;
