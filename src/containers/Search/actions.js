import ActionTypes from './actionTypes';

export function setSuggestions({ suggestions }) {
  return {
    type: ActionTypes.SET_SUGGESTIONS,
    suggestions,
  };
};
