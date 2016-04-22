import { API_BASE } from '../../cfg';
import { CALL_API } from 'redux-api-middleware';
import { voteTypes } from './voting';

export const actionTypes = {
  INIT:     'voting/INIT',
  REQUEST:  'voting/REQUEST',
  SUCCESS:  'voting/SUCCESS',
  ERROR:    'voting/ERROR'
};

export const initVoting = (video) => {
  return {
    type: actionTypes.INIT,
    videoId: video.id,
    hasVoted: video.myVote !== null,
    vote: video.myVote === null ? voteTypes.NONE : (video.myVote === "up" ? voteTypes.UP : voteTypes.DOWN)
  }
};

export const upvote = (accessToken, videoId) => ({
  [CALL_API]: {
    endpoint: `${API_BASE}/videos/${videoId}/upvote`,
    method: 'POST',
    meta: { videoId, vote: voteTypes.UP },
    types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => { videoId: action.meta.videoId } } ]
  }
});

export const downvote = (accessToken, videoId) => ({
  [CALL_API]: {
    endpoint: `${API_BASE}/videos/${videoId}/downvote`,
    method: 'POST',
    meta: { videoId, vote: voteTypes.DOWN },
    types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => { videoId: action.meta.videoId } } ]
  }
});

export const resetVote = (accessToken, videoId) => ({
  [CALL_API]: {
    endpoint: `${API_BASE}/videos/${videoId}/resetVote`,
    method: 'POST',
    meta: { videoId, vote: voteTypes.NONE },
    types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => { videoId: action.meta.videoId } } ]
  }
});
