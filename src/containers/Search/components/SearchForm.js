import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fixResultsList,
  goToNextPage,
  goToPreviousPage,
  hideSuggestionBox,
  setFilters,
  setSearchResults,
  setSuggestions,
  showSuggestionBox,
} from '../actions';

import {
  doesMemberInformationMatchSearchText,
  sortMembers,
} from '../util';

import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import SuggestionBox from './SuggestionBox';
import SearchInput from '../../../components/SearchInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      shouldSuggestionBoxBeDisplayed: true,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      gender,
      party,
      searchResults,
      usState,
    } = this.props.search;

    if ((gender !== nextProps.search.gender
      || party !== nextProps.search.party
      || usState !== nextProps.search.usState)
      && searchResults.length > 0) {
      this.processFixing(nextProps);
    }
  }
  
  makeSuggestionBoxInvisible = () => {
    setTimeout(() => {
      this.props.hideSuggestionBox();
    }, 200);
  }

  startFixingResultsList = () => {
    this.props.hideSuggestionBox();
    this.processFixing(this.props);
  }

  processFixing = (props) => {
    const {
      app: {
        members,
      },
      search: {
        gender,
        pageSize,
        party,
        usState,
      },
    } = props;

    this.props.fixResultsList({
      gender,
      members,
      pageSize,
      party,
      searchText: this.state.searchText,
      state: usState,
    });
  }
  

  textChanged = ({ value }) => {
    const searchText = value.trim() === '' ? null : value.toLowerCase();

    const {
      app: {
        members,
      },
      search: {
        gender,
        party,
        usState,
      },
      setSuggestions,
    } = this.props;

    const newSuggestions = members
      .filter((member) => doesMemberInformationMatchSearchText({
        gender,
        member,
        party,
        searchText,
        state: usState,
      }))
      .sort((a, b) => sortMembers({ a, b }))
      .slice(0, 7);

    this.setState({ searchText });
    setSuggestions({ suggestions: newSuggestions });
  }

  render() {
    return (
      <div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <SearchInput
              type="text"
              onChange={this.textChanged}
              onClick={this.startFixingResultsList}
              onFocus={this.props.showSuggestionBox}
              onBlur={this.makeSuggestionBoxInvisible}
              onPressEnter={this.startFixingResultsList}
              placeholder={`Search a member of the ${this.props.search.chamber}`} />
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-lg-12">
            <SearchFilters
              gender={this.props.search.gender}
              party={this.props.search.party}
              usState={this.props.search.usState}
              setFilters={this.props.setFilters} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {
              !this.state.searchText || !this.props.search.shouldSuggestionBoxBeDisplayed ?
                null : (<SuggestionBox suggestions={this.props.search.suggestions} />)
            }
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3">
            <SearchResults
              pageNumber={this.props.search.pageNumber}
              results={this.props.search.searchResults}
              totalPages={this.props.search.totalPages}
              nextPageAction={this.props.goToNextPage}
              previousPageAction={this.props.goToPreviousPage} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fixResultsList: ({
      gender,
      members,
      pageSize,
      party,
      searchText,
      state,
    }) =>
      dispatch(fixResultsList({
        gender,
        members,
        pageSize,
        party,
        searchText,
        state,
      })),

    goToNextPage: () =>
      dispatch(goToNextPage()),

    goToPreviousPage: () =>
      dispatch(goToPreviousPage()),

    hideSuggestionBox: () =>
      dispatch(hideSuggestionBox()),
    
    setFilters: ({ gender, party, usState }) =>
      dispatch(setFilters({ gender, party, usState })),

    setSearchResults: ({ searchResults, totalPages }) =>
      dispatch(setSearchResults({ searchResults, totalPages })),

    setSuggestions: ({ suggestions }) =>
      dispatch(setSuggestions({ suggestions })),

    showSuggestionBox: () =>
      dispatch(showSuggestionBox()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
