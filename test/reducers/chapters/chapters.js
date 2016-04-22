import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/chapters/chapters';
import { actionTypes } from '../../../src/reducers/chapters/actionCreators';

const initialState = { status: status.LOADING, chapter: null };
const chapter = {
  "id": 123,
  "title": "Some chapter",
  "description": "HTML description.",
  "videos": [
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
    }
  ],
  "sponsor": {
    "name": "Some company",
    "logoUrl": "http://someurl.com/logo.png",
    "link": "http://someurl.com"
  },
  "nextChapter": {
    "id": 124,
    "title": "Another chapter"
  },
  "previousChapter": {
    "id": 125,
    "title": "Some another chapter"
  }
};

describe('chapters loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, chapter: null });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: chapter };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, chapter });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, chapter };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.ERROR, chapter: null });
  });

});
