import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  startLoadingAllMembers,
} from '../actions';

import { Chambers } from '../../../data/static/chambers';
import SuggestionBox from './SuggestionBox';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chamber: Chambers.HOUSE,
      searchText: null,
      suggestions: [],
    };
  }

  textChanged = (event) => {
    this.props.startLoadingAllMembers();

    const {
      target: {
        value,
      }
    } = event;

    this.setState({
      searchText: value.trim() === '' ? null : value.toLowerCase(),
    });
    
    const { results } = this.props;

    const newSuggestions = results.filter((result) => {
      const {
        firstName,
        lastName,
        middleName,
      } = result;

      return firstName.toLowerCase().includes(this.state.searchText)
        || lastName.toLowerCase().includes(this.state.searchText)
        || middleName.toLowerCase().includes(this.state.searchText);
    });

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
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  aria-describedby="searchInput"
                  placeholder={`Search a member of the ${this.state.chamber}`}
                  onChange={this.textChanged} />
              </div>
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
