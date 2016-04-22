import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';

export const actionTypes = {
  SELECT:   'videos/SELECT',
  REQUEST:  'videos/REQUEST',
  SUCCESS:  'videos/SUCCESS',
  ERROR:    'videos/ERROR'
};

export const selectVideo = (video) => ({
  type: actionTypes.SELECT,
  video
});

export const loadVideo = (videoId) => {
  return {
    [CALL_API]: {
      endpoint: `${API_BASE}/videos/${videoId}`,
      method: 'GET',
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
    }
  };
};
