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
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/oauth2/token?grant_type=token&google_id_token=${googleIdToken}`,
      method: 'GET',
      types: [
        {
          type: actionTypes.REQUEST,
          meta: { googleIdToken }
        },
        actionTypes.SUCCESS,
        actionTypes.ERROR
      ]
    }
  };
};
