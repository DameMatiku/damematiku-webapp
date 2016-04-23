import React from 'react';

import VideoView from '../VideoView/VideoView';
import UploadButton from '../../containers/UploadButton/UploadButton';
import EmptyChapterView from '../EmptyChapterView/EmptyChapterView';

const ChapterDescription = ({ chapter }) => (
  <div>
    <h2>{chapter.name}</h2>
    <p>{chapter.description}</p>
  </div>
);

export default ChapterDescription;
