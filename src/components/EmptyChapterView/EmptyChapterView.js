import React from 'react';
import UploadButton from '../../containers/UploadButton/UploadButton';

const EmptyChapterView = ({ chapter }) => (
  <div>
    <h2>Jejda, tady mělo být video, ale není! Buď první, kdo přispěje!</h2>
    <UploadButton chapter={chapter} />
  </div>
);
