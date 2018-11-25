import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fixResultsList,
  hideSuggestionBox,
  setSearchResults,
  setSuggestions,
  showSuggestionBox,
} from '../actions';

import {
  doesMemberInformationMatchSearchText,
  sortMembers,
} from '../membersFiltering';

import SuggestionBox from './SuggestionBox';
import SearchInput from '../../../components/SearchInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
      shouldSuggestionBoxBeDisplayed: true,
    };
  }
  
  makeSuggestionBoxInvisible = () => {
    setTimeout(() => {
      this.props.hideSuggestionBox();
    }, 200);
  }

  startFixingResultsList = () => {
    this.props.fixResultsList({
      members: this.props.app.members,
      pageSize: this.props.search.pageSize,
      searchText: this.state.searchText,
    });
  }

  textChanged = ({ value }) => {
    const searchText = value.trim() === '' ? null : value.toLowerCase();

    const {
      app: {
        members,
      },
      setSuggestions,
    } = this.props;

    const newSuggestions = members
      .filter((member) => doesMemberInformationMatchSearchText({ searchText, member }))
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
            <form>
              <SearchInput
                type="text"
                onChange={this.textChanged}
                onClick={this.startFixingResultsList}
                onFocus={this.props.showSuggestionBox}
                onBlur={this.makeSuggestionBoxInvisible}
                placeholder={`Search a member of the ${this.props.search.chamber}`} />
            </form>
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
          <div className="col-lg-12">
            <h1>LIMIT</h1>
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
    fixResultsList: ({ members, pageSize, searchText }) =>
      dispatch(fixResultsList({ members, pageSize, searchText })),

    hideSuggestionBox: () =>
      dispatch(hideSuggestionBox()),

    setSearchResults: ({ searchResults, totalPages }) =>
      dispatch(setSearchResults({ searchResults, totalPages })),

    setSuggestions: ({ suggestions }) =>
      dispatch(setSuggestions({ suggestions })),

    showSuggestionBox: () =>
      dispatch(showSuggestionBox()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
