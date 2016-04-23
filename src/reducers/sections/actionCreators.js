import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  REQUEST:  'sections/REQUEST',
  SUCCESS:  'sections/SUCCESS',
  ERROR:    'sections/ERROR'
};

export const loadMathSections = (tags) => loadSections(1, tags);

export const loadSections = (subject, tags) => {
  const queryString = tags.map(tag => `tags[]=${tag}`).join('&');
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/subjects/${subject}/sections${queryString.length > 0 ? `?${queryString}` : ''}`,
      method: 'GET',
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
