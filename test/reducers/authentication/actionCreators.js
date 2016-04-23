import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, authenticate } from '../../../src/reducers/authentication/actionCreators';

describe('authentication action creators', () => {

  it('must create correct API action', () => {
    const token = "blasdlkjasdlkjasdkjl";
    expect(authenticate(token)[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/oauth2/token?grant_type=token&google_id_token=${token}`,
        method: 'GET',
        types: [
          {
            type: actionTypes.REQUEST,
            meta: { googleIdToken: token }
          },
          actionTypes.SUCCESS,
          actionTypes.ERROR
        ]
      }
    );
  });

});
