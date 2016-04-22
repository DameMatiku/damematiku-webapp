import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  SELECT:   'chapters/SELECT',
  REQUEST:  'chapters/REQUEST',
  SUCCESS:  'chapters/SUCCESS',
  ERROR:    'chapters/ERROR'
};

export const selectChapter = (chapter) => ({
  type: actionTypes.SELECT,
  chapter
});

export const loadChapter = (chapterId) => {
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/chapters/${chapterId}`,
      method: 'GET',
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
