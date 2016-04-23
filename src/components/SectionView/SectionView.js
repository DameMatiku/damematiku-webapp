import React from 'react';

import Card, { CardHeader, CardText } from 'material-ui/Card';

const SectionView = ({ section }) => (
  <Card>
    <CardHeader
      title={section.title}
      subtitle={''}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText expandable={true}>
      <List>
        {section.chapters.map((chapter, key) =>
          <ChapterListView key={key} chapter={chapter} />)}
      </List>
    </CardText>
  </Card>
);

export default SectionView;
