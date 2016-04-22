import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, authenticate } from '../../../src/reducers/authentication/actionCreators';
import FormData from 'form-data';

describe('authentication action creators', () => {

  it('must create correct API action', () => {
    const token = "blasdlkjasdlkjasdkjl";
    const body = new FormData();
    body.append('grant_type', 'token');
    body.append('token', token);

    expect(authenticate(token)[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/oauth2/token`,
        method: 'GET',
        body,
        meta: { googleIdToken: token },
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
      }
    );
  });

});
