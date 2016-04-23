import { actionTypes } from './actionCreators';

export const status = {
  NONINITIALISED: 'NONINITIALISED',
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

export const voteTypes = {
  UP: 'UP',
  DOWN: 'DOWN',
  NONE: 'NONE'
};

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT:
      if (state.hasOwnProperty(action.videoId)) {
        // do not override the in-memmory - more up-to-date - data
        return status;
      }

      return Object.assign({}, state, {
        [action.videoId]: {
          status: status.LOADED,
          hasVoted: action.hasVoted,
          vote: action.vote
        }
      });

    case actionTypes.REQUEST:
      return Object.assign({}, state, {
        [action.meta.videoId]: { status: status.LOADING, hasVoted: action.meta.vote !== voteTypes.NONE, vote: action.meta.vote }
      });

    case actionTypes.SUCCESS:
      return Object.assign({}, state, {
        [action.payload.id]: { ...state[action.payload.id], status: status.LOADED }
      });

    case actionTypes.ERROR:
      return Object.assign({}, state, {
        [action.meta.videoId]: { status: status.ERROR }
      });
    default:
      return state;
  }
};

export default reducer;
