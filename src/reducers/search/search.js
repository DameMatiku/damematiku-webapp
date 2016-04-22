import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADED,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return { status: status.LOADING, results: [] };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, results: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, results: [] };

    default:
      return state;
  }
};

export default reducer;
