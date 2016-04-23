import React from 'react';

import RaiseButton from 'material-ui/RaiseButton';

class UpoadButton extends Component {

  render() {
    const { chapter } = this.props;
    return (
      <p>
        Cítíš se kreativní? <RaiseButton label={'Nahrej svoje video!'} primary={true} onMouseUp={onClick} onTouchStop={onClick} />
      </p>
    );
  }

}

export default UploadButton;
