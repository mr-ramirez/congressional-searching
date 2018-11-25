import ActionTypes from './actionTypes';
import Chambers from '../../data/static/chambers';

const initialState = {
  chamber: Chambers.HOUSE.name,
  congress: Chambers.HOUSE.maxCongress,
  pageNumber: 0,
  pageSize: 10,
  searchResults: [],
  shouldSuggestionBoxBeDisplayed: false,
  suggestions: [],
  totalPages: 0,
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.HIDE_SUGGESTION_BOX:
      return {
        ...state,
        shouldSuggestionBoxBeDisplayed: false,
      };
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        pageNumber: action.pageNumber,
        searchResults: action.searchResults,
        totalPages: action.totalPages,
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
