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
    types: [
      {
        type: actionTypes.REQUEST,
        meta: { videoId, vote: voteTypes.UP }
      },
      actionTypes.SUCCESS,
      {
        type: actionTypes.ERROR,
        meta: (action) => { videoId: action.meta.videoId }
      }
    ]
  }
});

export const downvote = (accessToken, videoId) => ({
  [CALL_API]: {
    endpoint: `${API_BASE}/videos/${videoId}/downvote`,
    method: 'POST',
    types: [
      {
        type: actionTypes.REQUEST,
        meta: { videoId, vote: voteTypes.DOWN }
      },
      actionTypes.SUCCESS,
      {
        type: actionTypes.ERROR,
        meta: (action) => { videoId: action.meta.videoId }
      }
    ]
  }
});

export const resetVote = (accessToken, videoId) => ({
  [CALL_API]: {
    endpoint: `${API_BASE}/videos/${videoId}/resetVote`,
    method: 'POST',
    types: [
      {
        type: actionTypes.REQUEST,
        meta: { videoId, vote: voteTypes.NONE }
      },
      actionTypes.SUCCESS,
      {
        type: actionTypes.ERROR,
        meta: (action) => { videoId: action.meta.videoId }
      }
    ]
  }
});
