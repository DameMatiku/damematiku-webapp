import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/search/search';
import { actionTypes, loadTags } from '../../../src/reducers/search/actionCreators';

const initialState = { status: status.LOADED, results: [] };
const results = [
  {
    "type": "section",
    "id": 12,
    "title": "Section 1",
    "chapters": [
      {
        "id": 124,
        "title": "Some chapter"
      }
    ]
  },
  {
    "type": "chapter",
    "id": 123,
    "title": "Chapter about 'search query'"
  }
];

describe('searching', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, results: [] });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: results };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, results });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, results };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.ERROR, results: [] });
  });

});
