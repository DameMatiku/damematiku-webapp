import React from 'react';

import Card, { CardHeader, CardText } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import ChapterListView from '../ChapterListView/ChapterListView';
import Avatar from 'material-ui/Avatar';

const SectionView = ({ n, section }) => {
  return (
    <Card>
      <CardHeader
        title={section.name}
        subtitle={''}
        actAsExpander={true}
        showExpandableButton={true}
        avatar={<Avatar>{n}</Avatar>} />
      <CardText expandable={true}>
        <List>
          {section.chapters.map((chapter, key) =>
            <ChapterListView key={key} n={key + 1} chapter={chapter} viewChapter={() => console.log(chapter)} />)}

          {section.chapers.length === 0
            && <ListItem primaryText={'V této kapitole nejsou žádná videa.'} />}
        </List>
      </CardText>
    </Card>
  );
}

export default SectionView;
