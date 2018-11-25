import ActionTypes from './actionTypes';
import Chambers from '../../data/static/chambers';

const initialState = {
  chamber: Chambers.HOUSE.name,
  congress: Chambers.HOUSE.maxCongress,
  gender: 'DEFAULT',
  pageNumber: 1,
  pageSize: 10,
  party: 'DEFAULT',
  searchResults: [],
  shouldSuggestionBoxBeDisplayed: false,
  usState: 'DEFAULT',
  suggestions: [],
  totalPages: 0,
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.GO_TO_NEXT_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case ActionTypes.GO_TO_PREVIOUS_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };
    case ActionTypes.HIDE_SUGGESTION_BOX:
      return {
        ...state,
        shouldSuggestionBoxBeDisplayed: false,
      };
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
        totalPages: action.totalPages,
        pageNumber: 1,
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
    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        congress: action.congress,
        chamber: action.chamber,
        gender: action.gender,
        pageSize: action.pageSize,
        party: action.party,
        usState: action.usState,
      };
    default:
      return state;
  }
};

export default searchReducer;
