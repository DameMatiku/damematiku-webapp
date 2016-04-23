import React from 'react';
import UploadButton from '../../containers/UploadButton/UploadButton';
import Divider from 'material-ui/Divider';

const EmptyChapterView = ({ chapter }) => (
  <div>
    <Divider />
    <p>Jejda, tady měla být videa, ale žádná tu nejsou! <b>:-(</b> Buď první, kdo přispěje!</p>
    <div style={{ textAlign: 'center', padding: 80, backgroundColor: '#eee' }}>
      <UploadButton chapter={chapter} />
    </div>
  </div>
);

export default EmptyChapterView;
