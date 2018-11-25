import ActionTypes from './actionTypes';
import Chambers from '../../data/static/chambers';

const initialState = {
  chamber: Chambers.HOUSE.name,
  congress: Chambers.HOUSE.maxCongress,
  shouldSuggestionBoxBeDisplayed: false,
  suggestions: [],
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.HIDE_SUGGESTION_BOX:
      return {
        ...state,
        shouldSuggestionBoxBeDisplayed: false,
      };
    case ActionTypes.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
      };
    case ActionTypes.SHOW_SUGGESTION_BOX:
      return {
        ...state,
        shouldSuggestionBoxBeDisplayed: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
