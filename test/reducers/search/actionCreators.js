import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, performSearch } from '../../../src/reducers/search/actionCreators';
import FormData from 'form-data';

describe('search action creators', () => {

  it('must create correct API action', () => {
    const searchTerm = 'aslkd alksdj alskdj askldjaslkd';

    const expectedBody = new FormData();
    expectedBody.append('q', searchTerm);

    expect(performSearch(searchTerm)).to.eql(
      {
        [CALL_API]: {
          endpoint: API_BASE + '/search',
          method: 'GET',
          body: expectedBody,
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});
