import React from 'react';
import Avatar from 'material-ui/Avatar';

const AuthorView = ({ author }) => (
  <div>
    <h3><Avatar src={author.avatarUrl} /> {author.name}</h3>
  </div>
);

export default AuthorView;
