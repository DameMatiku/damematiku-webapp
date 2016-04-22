import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  REQUEST:  'tags/REQUEST',
  SUCCESS:  'tags/SUCCESS',
  ERROR:    'tags/ERROR'
};

export const loadTags = () => ({
  [CALL_API]: {
    endpoint: API_BASE + '/tests',
    method: 'GET',
    types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
  }
});