import React from 'react';

import Voting from '../../containers/Voting/Voting';
import Youtube from 'react-youtube';
import Card, { CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AuthorView from '../AuthorView/AuthorView';

const VideoView = ({ video }) => (
  <Card>
    <CardHeader title={video.author.name} author={<Avatar src={video.author.avatarUrl} />} />
    <CardText>
      <Youtube videoId={video.youtubeId} />
      <Voting video={video} />
    </CardText>
    <Divider />
  </Card>
);

export default VideoView;
