import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/videos/videos';
import { actionTypes } from '../../../src/reducers/videos/actionCreators';

const initialState = { status: status.LOADING, video: null };
const video = {
  "id": 153,
  "title": "Some chapter",
  "author": {
    "id": 1325,
    "name": "Lord Voldemort",
    "reputation": 10000,
    "avatarUrl": "http://someurl.com/img.png"
  },
  "youtubeId": "13kbnrfv01",
  "votes": -3,
  "myVote": "up"
};

describe('videos loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, video: null });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: video };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, video });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, video };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.ERROR, video: null });
  });

});
