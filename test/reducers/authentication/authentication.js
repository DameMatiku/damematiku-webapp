import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/authentication/authentication';
import { actionTypes } from '../../../src/reducers/authentication/actionCreators';

const initialState = { status: status.UNLOGGED, googleIdToken: null, accessToken: null };
const author = {
  "id": 1325,
  "name": "Lord Voldemort",
  "reputation": 10000,
  "avatarUrl": "http://someurl.com/img.png"
};

describe('authentication', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must not load missing token', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.INIT, accessToken: null, googleIdToken: 'googletoken' };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({
      status: status.UNLOGGED,
      accessToken: null,
      googleIdToken: 'googletoken'
    });
  });

  it('must load token', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.INIT, accessToken: 'accesstoken', googleIdToken: 'googletoken' };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({
      status: status.LOGGED_IN,
      googleIdToken: "googletoken",
      accessToken: "accesstoken"
    });
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST, meta: { googleIdToken: 'abcdefgh' } };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({
      status: status.LOGGING_IN,
      googleIdToken: 'abcdefgh',
      accessToken: null
    });
  });

  it('must handle successful loading of the request', () => {
    const originalState = {
      status: status.LOGGING_IN,
      googleIdToken: 'abcdefgh'
    };
    const successAction = { type: actionTypes.SUCCESS, payload: { access_token: 'xxx_access_token_yyy' } };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOGGED_IN, accessToken: 'xxx_access_token_yyy', googleIdToken: 'abcdefgh' });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, author };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.AUTHENTICATION_FAILED, accessToken: null, googleIdToken: null });
  });

});
