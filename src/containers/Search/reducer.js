import ActionTypes from './actionTypes';
import Chambers from '../../data/static/chambers';

const initialState = {
  chamber: Chambers.HOUSE.name,
  congress: Chambers.HOUSE.maxCongress,
  suggestions: [],
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
      };
    default:
      return state;
  }
};

export default searchReducer;
