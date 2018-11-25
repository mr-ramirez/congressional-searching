import ActionTypes from './actionTypes';

export function setSuggestions({ suggestions }) {
  return {
    type: ActionTypes.SET_SUGGESTIONS,
    suggestions,
  };
};

export function showSuggestionBox() {
  return {
    type: ActionTypes.SHOW_SUGGESTION_BOX,
  };
};

export function hideSuggestionBox() {
  return {
    type: ActionTypes.HIDE_SUGGESTION_BOX,
  };
};
