import ActionTypes from './actionTypes';

import {
  doesMemberInformationMatchSearchText,
  sortMembers,
} from './util';

export function goToNextPage() {
  return {
    type: ActionTypes.GO_TO_NEXT_PAGE,
  };
}

export function goToPreviousPage() {
  return {
    type: ActionTypes.GO_TO_PREVIOUS_PAGE,
  };
}

export function setFilters({ chamber, congress, gender, pageSize, party, usState }) {
  return {
    type: ActionTypes.SET_FILTERS,
    congress,
    chamber,
    gender,
    pageSize,
    party,
    usState,
  };
};

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

export function fixResultsList({
  gender,
  members,
  pageSize,
  party,
  searchText,
  state,
}) {
  return (dispatch) => {
    const filteredResults = members
      .filter((member) => doesMemberInformationMatchSearchText({
        gender,
        member,
        party,
        searchText,
        state,
      }))
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
