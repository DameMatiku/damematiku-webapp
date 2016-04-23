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
      return { status: status.LOADED, chapter: action.chapter };

    case actionTypes.REQUEST:
      return { status: status.LOADING, chapter: null };

    case actionTypes.SUCCESS:
      console.log(action);
      return { status: status.LOADED, chapter: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, chapter: null };

    default:
      return state;
  }
};

export default reducer;
