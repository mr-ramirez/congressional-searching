import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  hideSuggestionBox,
  setSuggestions,
  showSuggestionBox,
} from '../actions';

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

  doesMemberInformationMatchSearchText = ({ searchText, member }) => {
    const {
      firstName,
      lastName,
      middleName,
    } = member;

    return firstName.toLowerCase().includes(searchText)
      || lastName.toLowerCase().includes(searchText)
      || middleName.toLowerCase().includes(searchText);
  }

  makeSuggestionBoxInvisible = () => {
    setTimeout(() => {
      this.props.hideSuggestionBox();
    }, 200);
  }

  sortMembers = ({ a, b }) => {
    const firstMember = `${a.firstName} ${a.middleName} ${a.lastName}`;
    const secondMember = `${b.firstName} ${b.middleName} ${b.lastName}`;

    return ('' + firstMember).localeCompare(secondMember);
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
      .filter((member) => this.doesMemberInformationMatchSearchText({ searchText, member }))
      .sort((a, b) => this.sortMembers({ a, b }))
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
    hideSuggestionBox: () =>
      dispatch(hideSuggestionBox()),
    setSuggestions: ({ suggestions }) =>
      dispatch(setSuggestions({ suggestions })),
    showSuggestionBox: () =>
      dispatch(showSuggestionBox()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
