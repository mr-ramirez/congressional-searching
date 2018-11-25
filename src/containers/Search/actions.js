import ActionTypes from './actionTypes';

import {
  doesMemberInformationMatchSearchText,
  sortMembers,
} from './membersFiltering';

export function setSearchResults({ searchResults, totalPages }) {
  return {
    type: ActionTypes.SET_SEARCH_RESULTS,
    searchResults,
    totalPages,
  };
};

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

export function fixResultsList({ members, pageSize, searchText }) {
  return (dispatch) => {
    const filteredResults = members
      .filter((member) => doesMemberInformationMatchSearchText({ searchText, member }))
      .sort((a, b) => sortMembers({ a, b }));

    let totalPages = Math.trunc(filteredResults.length / pageSize);
    const remainder = (filteredResults.length % pageSize);

    if (remainder > 0) {
      totalPages += 1;
    }

    const searchResults = [];

    for (let page = 1; page <= totalPages; page++) {
      const toIndex = (page * pageSize);
      const fromIndex = (toIndex - pageSize);
      searchResults.push(filteredResults.slice(fromIndex, toIndex));
    }

    return dispatch(setSearchResults({
      searchResults,
      totalPages,
    }));
  };
}
