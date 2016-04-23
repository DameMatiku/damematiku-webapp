import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

class UploadButton extends Component {

  onClick = () => {
    const { chapter } = this.props;
    window.location = '/#/upload';
  };

  render() {
    return (
      <p>
        Cítíš se kreativní? <RaisedButton label={'Nahrej svoje video!'} primary={true} onMouseUp={this.onClick} onTouchStop={this.onClick} />
      </p>
    );
  }

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UploadButton);
