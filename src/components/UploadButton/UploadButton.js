import React from 'react';

import RaiseButton from 'material-ui/RaiseButton';

const UpoadButton = ({ onClick }) => (
  <p>
    Cítíš se kreativní? <RaiseButton label={'Nahrej svoje video!'} primary={true} onMouseUp={onClick} onTouchStop={onClick} />
  </p>
);

export default UploadButton;
