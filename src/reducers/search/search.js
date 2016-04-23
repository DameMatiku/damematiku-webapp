import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADED,
  query: null,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return { status: status.LOADING, query: action.meta.query, results: [] };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, query: state.query, results: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, results: [] };

    default:
      return state;
  }
};

export default reducer;
