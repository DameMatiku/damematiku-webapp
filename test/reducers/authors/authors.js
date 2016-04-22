import { expect } from 'chai';
import reducer, { status } from '../../../src/reducers/authors/authors';
import { actionTypes } from '../../../src/reducers/authors/actionCreators';

const initialState = { status: status.LOADING, author: null };
const author = {
  "id": 1325,
  "name": "Lord Voldemort",
  "reputation": 10000,
  "avatarUrl": "http://someurl.com/img.png"
};

describe('authors loading', () => {

  it('must create valid empty state', () => {
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('must handle start of request', () => {
    const originalState = initialState;
    const requestAction = { type: actionTypes.REQUEST };
    const state = reducer(originalState, requestAction);
    expect(state).to.eql({ status: status.LOADING, author: null });
  });

  it('must handle successful loading of the request', () => {
    const originalState = initialState;
    const successAction = { type: actionTypes.SUCCESS, payload: author };
    const state = reducer(originalState, successAction);
    expect(state).to.eql({ status: status.LOADED, author });
  });

  it('must handle successful loading of the request', () => {
    const originalState = { status: status.LOADED, author };
    const errorAction = { type: actionTypes.ERROR };
    const state = reducer(originalState, errorAction);
    expect(state).to.eql({ status: status.ERROR, author: null });
  });

});
