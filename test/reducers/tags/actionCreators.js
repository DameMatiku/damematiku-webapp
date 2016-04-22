import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadTags } from '../../../src/reducers/tags/actionCreators';

describe('tags loading action creators', () => {

  it('must create correct API action', () => {
    expect(loadTags()).to.eql(
      {
        [CALL_API]: {
          endpoint: API_BASE + '/tags',
          method: 'GET',
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});
