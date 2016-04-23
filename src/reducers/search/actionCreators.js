import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  REQUEST:  'search/REQUEST',
  SUCCESS:  'search/SUCCESS',
  ERROR:    'search/ERROR'
};

export const performSearch = (term) => {
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/search?q=${term}`,
      method: 'GET',
      types: [
        { type: actionTypes.REQUEST, meta: { query: term } },
        actionTypes.SUCCESS,
        actionTypes.ERROR
      ]
    }
  };
};
