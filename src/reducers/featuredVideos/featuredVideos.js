import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADING,
  videos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.REQUEST:
      return { status: status.LOADING, videos: [] };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, videos: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, videos: [] };

    default:
      return state;
  }
};

export default reducer;
