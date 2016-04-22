import { expect } from 'chai';
import reducer, { status, voteTypes } from '../../../src/reducers/voting/voting';
import { actionTypes } from '../../../src/reducers/voting/actionCreators';

const initialState = {};

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

describe('voting loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST, meta: { videoId: 153, vote: voteTypes.UP } };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({
      153: {
        status: status.LOADING,
        hasVoted: true,
        vote: voteTypes.UP
      }
    });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: video };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({
      153: {
        ...state[153],
        status: status.LOADED
      }
    });
  });

  it('must handle failed loading of the request', () => {
    const originalState = {
      153: {
        status: status.LOADING,
        hasVoted: false,
        vote: voteTypes.NONE
      }
    };
    const errorAction = { type: actionTypes.ERROR, meta: { videoId: 153 } }; // @todo ?! does the callback generated meta work?!!! I hope it does!!!
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({
      153: {
        status: status.ERROR
      }
    });
  });

});
