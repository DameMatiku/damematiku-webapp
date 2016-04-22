import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadFeatured } from '../../../src/reducers/featuredVideos/actionCreators';

describe('featured videos loading action creators', () => {

  it('must create correct API action', () => {
    expect(loadFeatured()[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/videos/featured`,
        method: 'GET',
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
      }
    );
  });

});
