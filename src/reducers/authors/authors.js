import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADING,
  author: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT:
      return { status: status.LOADED, author: action.author };

    case actionTypes.REQUEST:
      return { status: status.LOADING, author: null };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, author: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, author: null };

    default:
      return state;
  }
};

export default reducer;
