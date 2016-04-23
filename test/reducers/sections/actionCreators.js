import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadMathSections, loadSections } from '../../../src/reducers/sections/actionCreators';
import FormData from 'form-data';

describe('sections loading action creators', () => {

  it('must create correct API action', () => {
    const tags = ['a', 'b', 'c'];
    expect(loadMathSections(tags)[CALL_API]).to.eql(
      {
        endpoint: API_BASE + '/subjects/math?tags[]=a&tags[]=b&tags[]=c',
        method: 'GET',
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
      }
    );
  });

});
