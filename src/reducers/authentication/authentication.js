import { actionTypes } from './actionCreators';

export const status = {
  UNLOGGED: 'UNLOGGED',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_IN: 'LOGGED_IN',
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED'
};

const initialState = {
  status: status.UNLOGGED,
  googleIdToken: null,
  accessToken: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT:
      return {
        status: action.googleIdToken !== null && action.accessToken !== null ? status.LOGGED_IN : status.UNLOGGED,
        googleIdToken: action.googleIdToken,
        accessToken: action.accessToken
      };

    case actionTypes.REQUEST:
      return {
        status: status.LOGGING_IN,
        googleIdToken: action.meta.googleIdToken,
        accessToken: null
      };

    case actionTypes.SUCCESS:
      return {
        status: status.LOGGED_IN,
        googleIdToken: state.googleIdToken,
        accessToken: action.payload.access_token
      };

    case actionTypes.ERROR:
      return {
        status: status.AUTHENTICATION_FAILED,
        googleIdToken: null,
        accessToken: null
      };

    default:
      return state;
  }
};


export default reducer;
