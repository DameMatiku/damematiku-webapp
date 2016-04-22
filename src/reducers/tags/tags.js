import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADED,
  tags: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return { status: status.LOADING, tags: state.tags };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, tags: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, tags: state.tags };

    default:
      return state;
  }
};

export default reducer;
