import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  startLoadingAllMembers,
} from '../actions';

import Chambers from '../../../data/static/chambers';
import SuggestionBox from './SuggestionBox';
import SearchInput from '../../../components/SearchInput';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chamber: Chambers.HOUSE.name,
      searchText: null,
      suggestions: [],
    };
  }

  textChanged = ({ value }) => {
    this.setState({
      searchText: value.trim() === '' ? null : value.toLowerCase(),
    });
    
    const { results } = this.props;

    const newSuggestions = results
      .filter((result) => {
        const {
          firstName,
          lastName,
          middleName,
        } = result;

        const { searchText } = this.state;

        return firstName.toLowerCase().includes(searchText)
          || lastName.toLowerCase().includes(searchText)
          || middleName.toLowerCase().includes(searchText);
      })
      .sort((a, b) => {
        const firstMember = `${a.firstName} ${a.middleName} ${a.lastName}`;
        const secondMember = `${b.firstName} ${b.middleName} ${b.lastName}`;

        return ('' + firstMember).localeCompare(secondMember);
      })
      .slice(0, 10);

    this.setState({
      suggestions: newSuggestions,
    });
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
                placeholder={`Search a member of the ${this.state.chamber}`} />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {
              !this.state.searchText ?
                null : (<SuggestionBox suggestions={this.state.suggestions} />)
            }
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
    startLoadingAllMembers: () => dispatch(startLoadingAllMembers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
