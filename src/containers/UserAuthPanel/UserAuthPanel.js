import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GOOGLE_CLIENT_ID } from '../../cfg';
import GoogleLogin from 'react-google-login';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { authenticate } from '../../reducers/authentication/authentication';

class UserAuthPanel extends Component {

  componentWillMount = () => {    
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({ client_id: GOOGLE_CLIENT_ID });
    });
  };

  tryLogin = () => {
     window.gapi.auth2.getAuthInstance().signIn({ scope: 'profile email' })
      .then(this.onGoogleLoggedIn);
  };

  onGoogleLoggedIn = (user) => {
    this.props.authenticate(user.getAuthResponse().id_token);
  };

  renderLoggedIn = () => (
    <div>Login</div>
  );

  renderUnlogged = () => (
    <div>
      <RaisedButton
        label={'Přihlásit se'}
        primary={true}
        onMouseUp={this.tryLogin}
        onTouchEnd={this.tryLogin} />
      <FlatButton label={'Registrovat se'} disabled />
    </div>
  );

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      return this.renderLoggedIn();
    } else {
      return this.renderUnlogged();
    }
  }

}

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.authentication.accessToken !== null
});
const mapDispatchToProps = (dispatch, props) => ({
  authenticate: (googleIdToken) => dispatch(authenticate(googleIdToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthPanel);
