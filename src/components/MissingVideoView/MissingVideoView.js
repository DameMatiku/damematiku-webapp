import React from 'react';
import UploadButton from '../UploadButton/UploadButton';

const MissingVideoView = ({ uploadVideo }) => (
  <div>
    <h2>Jejda, tady mělo být video, ale není! Buď první, kdo přispěje!</h2>
    <UploadButton onClick={uploadVideo} />
  </div>
);
