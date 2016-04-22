import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadMathSections, loadSections } from '../../../src/reducers/sections/actionCreators';
import FormData from 'form-data';

describe('sections loading action creators', () => {

  it('must create correct API action', () => {
    const tags = ['a', 'b', 'c'];

    const expectedBody = new FormData();
    expectedBody.append('tags[]', 'a');
    expectedBody.append('tags[]', 'b');
    expectedBody.append('tags[]', 'c');

    expect(loadMathSections(tags)).to.eql(
      {
        [CALL_API]: {
          endpoint: API_BASE + '/sections/math',
          method: 'GET',
          body: expectedBody,
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});
