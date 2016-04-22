import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  SELECT:   'authors/SELECT',
  REQUEST:  'authors/REQUEST',
  SUCCESS:  'authors/SUCCESS',
  ERROR:    'authors/ERROR'
};

export const selectAuthor = (author) => ({
  type: actionTypes.SELECT,
  author
});

export const loadAuthor = (authorId) => {
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/authors/${authorId}`,
      method: 'GET',
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
