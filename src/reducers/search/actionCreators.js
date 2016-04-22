import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';
import FormData from 'form-data';

export const actionTypes = {
  REQUEST:  'search/REQUEST',
  SUCCESS:  'search/SUCCESS',
  ERROR:    'search/ERROR'
};

export const performSearch = (term) => {
  const body = new FormData();
  body.append('q', term);

  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/search`,
      method: 'GET',
      body,
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
