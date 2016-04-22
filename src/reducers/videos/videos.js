import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADING,
  chapter: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT:
      return { status: status.LOADED, video: action.video };

    case actionTypes.REQUEST:
      return { status: status.LOADING, video: null };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, video: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, video: null };

    default:
      return state;
  }
};

export default reducer;
