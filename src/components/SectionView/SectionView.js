import React from 'react';

import Card, { CardHeader, CardText } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import ChapterListView from '../ChapterListView/ChapterListView';
import Avatar from 'material-ui/Avatar';

const SectionView = ({ n, section, viewChapter }) => {
  return (
    <Card initiallyExpanded={true}>
      <CardHeader
        title={section.name}
        subtitle={'Dáme Matiku!'}
        actAsExpander={true}
        showExpandableButton={true}        
        avatar={<Avatar color={'white'} backgroundColor={'#e60434'}>{n}</Avatar>} />
      <CardText expandable={true}>
        <List>
          {section.chapters.map((chapter, key) =>
            <ChapterListView key={key} n={key + 1} chapter={chapter} viewChapter={viewChapter} />)}

          {section.chapters.length === 0
            && <ListItem primaryText={'V této kapitole nejsou žádná videa.'} disabled />}
        </List>
      </CardText>
    </Card>
  );
}

export default SectionView;
