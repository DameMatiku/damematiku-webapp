import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';
import FormData from 'form-data';

export const actionTypes = {
  REQUEST:  'sections/REQUEST',
  SUCCESS:  'sections/SUCCESS',
  ERROR:    'sections/ERROR'
};

export const loadMathSections = (tags) => loadSections('math', tags);

export const loadSections = (subject, tags) => {
  const body = new FormData();

  for (let tag of tags) {
    body.append('tags[]', tag);    
  }

  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/subjects/${subject}`,
      method: 'GET',
      body,
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
