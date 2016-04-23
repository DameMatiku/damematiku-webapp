import { actionTypes } from './actionCreators';

export const status = {
  LOADING:  'LOADING',
  LOADED:   'LOADED',
  ERROR:    'ERROR'
};

const initialState = {
  status: status.LOADING,
  tags: [],
  selected: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT:
      return {
        ...state,
        selected: [ ...state.selected.filter(t => t != action.tagId), action.tagId ]
      };

    case actionTypes.UNSELECT:
      return {
        ...state,
        selected: [ ...state.selected.filter(t => t != action.tagId) ] // @todo unselecting must unselect also all subtags!!!!! Or the selector on the hpmage won't work as expected....
      };

    case actionTypes.REQUEST:
      return { status: status.LOADING, tags: state.tags, selected: state.selected };

    case actionTypes.SUCCESS:
      return { status: status.LOADED, tags: action.payload, selected: state.selected };

    case actionTypes.ERROR:
      return { status: status.ERROR, tags: state.tags, selected: state.selected };

    default:
      return state;
  }
};

export default reducer;
