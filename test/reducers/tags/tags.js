import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/tags/tags';
import { actionTypes, loadTags } from '../../../src/reducers/tags/actionCreators';

const initialState = { status: status.LOADED, tags: [] };
const tags = [
  {
    "id": "zs",
    "title": "ZŠ",
    "subtags": [
      {
        "id": "1-grade",
        "title": "1. třída",
        "subtags": []
      }
    ]
  },
  {
    "id": "ss",
    "title": "SŠ",
    "subtags": [
      {
        "id": "1-grade",
        "title": "1. ročník",
        "subtags": []
      }
    ]
  }
];

describe('tags loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, tags: [] });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: tags };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, tags });
  });


  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, tags };
    const successAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.ERROR, tags });
  });

});
