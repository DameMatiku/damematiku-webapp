import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/featuredVideos/featuredVideos';
import { actionTypes } from '../../../src/reducers/featuredVideos/actionCreators';

const initialState = { status: status.LOADING, videos: [] };

const videos = [
  {
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
  },
  {
    "id": 157,
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
  }
];

describe('featured videos loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, videos: [] });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: videos };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, videos });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, videos };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.ERROR, videos: [] });
  });

});
