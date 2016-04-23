import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  REQUEST:  'tags/REQUEST',
  SUCCESS:  'tags/SUCCESS',
  ERROR:    'tags/ERROR',
  SELECT:    'tags/SELECT',
  UNSELECT:    'tags/UNSELECT',
};

export const select = (tagId) => ({ type: actionTypes.SELECT, tagId });
export const unselect = (tagId) => ({ type: actionTypes.UNSELECT, tagId });

export const loadTags = () => ({
  [CALL_API]: {
    endpoint: API_BASE + '/tags',
    method: 'GET',
    types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
  }
});
