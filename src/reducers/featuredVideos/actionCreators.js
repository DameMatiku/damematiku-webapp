import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';
import FormData from 'form-data';

export const actionTypes = {
  REQUEST:  'featured/REQUEST',
  SUCCESS:  'featured/SUCCESS',
  ERROR:    'featured/ERROR'
};

export const loadFeatured = () => {
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/videos/featured`,
      method: 'GET',
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
