import React from 'react';

const YoutubeThumbnail = ({ video }) =>
  <img src={'https://i.ytimg.com/vi/' + video.youtubeId + '/hqdefault.jpg'} alt={video.title} />;

export default YoutubeThumbnail;
