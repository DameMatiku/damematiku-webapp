import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';
import FormData from 'form-data';

export const actionTypes = {
  INIT:     'auth/INIT',
  REQUEST:  'auth/REQUEST',
  SUCCESS:  'auth/SUCCESS',
  ERROR:    'auth/ERROR',
};

export const authenticate = (googleIdToken) => {
  const body = new FormData();
  body.append('grant_type', 'token');
  body.append('google_id_token', googleIdToken);

  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/oauth2/token`,
      meta: { googleIdToken },
      body,
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
