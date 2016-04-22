import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADED,
  sections: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return { status: status.LOADING, sections: [] };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, sections: action.payload };

    case actionTypes.ERROR:
      return { status: status.ERROR, sections: state.sections };

    default:
      return state;
  }
};

export default reducer;
