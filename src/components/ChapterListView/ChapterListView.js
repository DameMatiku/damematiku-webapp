import React from 'react';

import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const ChapterListView = ({ n, chapter, viewChapter }) => (
  <ListItem
    onMouseUp={() => viewChapter(chapter)}
    onTouchStop={() => viewChapter(chapter)}
    primaryText={chapter.name}
    leftAvatar={<Avatar>{n}</Avatar>} />
);

export default ChapterListView;
