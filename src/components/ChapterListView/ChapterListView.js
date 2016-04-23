import React from 'react';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/ListItem';

const ChapterListView = ({ chapter, viewChapter }) => (
  <ListItem
    onMouseUp={viewChapter}
    onTouchStop={viewChapter}
    primaryText={chapter.title}
    leftAvatar={<Avatar>1.1</Avatar>} />
);
