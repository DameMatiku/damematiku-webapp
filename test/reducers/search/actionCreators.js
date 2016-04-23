import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, performSearch } from '../../../src/reducers/search/actionCreators';

describe('search action creators', () => {

  it('must create correct API action', () => {
    const searchTerm = 'aslkd alksdj alskdj askldjaslkd';

    expect(performSearch(searchTerm)[CALL_API]).to.eql(
      {
        endpoint: API_BASE + '/search?q=' + searchTerm,
        method: 'GET',
        
        types: [
          {
            type: actionTypes.REQUEST,
            meta: { query: searchTerm }
          },
          actionTypes.SUCCESS,
          actionTypes.ERROR
        ]
      }
    );
  });

});
