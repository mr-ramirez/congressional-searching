import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SearchFilters.css';
import Genders from '../../../data/static/genders';
import Parties from '../../../data/static/parties';
import States from '../../../data/static/states';

class SearchFilters extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      shouldFiltersBeDisplayed: false,
    };
  }

  handleGenderChange = (event) => {
    const {
      target: { value },
    } = event;

    const {
      party,
      setFilters,
      usState,
    } = this.props;

    setFilters({
      gender: value,
      party,
      usState,
    });
  }

  handlePartyChange = (event) => {
    const {
      target: { value },
    } = event;

    const {
      gender,
      setFilters,
      usState,
    } = this.props;

    setFilters({
      gender,
      party: value,
      usState,
    });
  }

  handleStateChange = (event) => {
    const {
      target: { value },
    } = event;

    const {
      party,
      setFilters,
      gender,
    } = this.props;

    setFilters({
      gender,
      party,
      usState: value,
    });
  }

  getFiltersForm = () => {
    return (
      <div className="row border border-secondary mx-1">
        <div className="col-lg-12 text-right">

          <div className="row">
            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="stateFilter">State</label>

                <select className="form-control filterText"
                  id="stateFilter"
                  onChange={this.handleStateChange} >
                  <option
                    value={ 'DEFAULT' }
                    key={'stateOption_default'} >
                    All states
                  </option>

                  {
                    States.map((state, index) => (
                      <option
                        value={ state.abbreviation }
                        key={`stateOption${index}`} >
                        { state.name }
                      </option>
                    ))
                  }
                </select>
              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="partyFilter">Party</label>

                <select className="form-control filterText"
                  id="partyFilter"
                  onChange={this.handlePartyChange} >
                  <option
                    value={ 'DEFAULT' }
                    key={'partyOption_default'} >
                    All parties
                  </option>
                  {
                    Object.keys(Parties).map((key, index) => (
                      <option
                        value={ Parties[key].abbreviation }
                        key={`partyOption${index}`} >
                        { Parties[key].name }
                      </option>
                    ))
                  }
                </select>
              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="genderFilter">Gender</label>

                <select className="form-control filterText"
                  id="genderFilter"
                  onChange={this.handleGenderChange} >
                  <option
                    value={ 'DEFAULT' }
                    key={'genderOption_default'} >
                    All genders
                  </option>
                  {
                    Object.keys(Genders).map((key, index) => (
                      <option
                        value={ Genders[key].abbreviation }
                        key={`genderOption${index}`} >
                        { Genders[key].name }
                      </option>
                    ))
                  }
                </select>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
            </div>
          </div>

        </div>
      </div>
    );
  }

  switchDisplayingOfFiltersForm = (event) => {
    event.preventDefault();

    this.setState({
      shouldFiltersBeDisplayed: !this.state.shouldFiltersBeDisplayed,
    });
  }
  
  render() {
    const { shouldFiltersBeDisplayed } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12">

          <div className="row">
            <div className="col-lg-12 text-right">
              <a className="text-secondary filterText"
                href="true"
                onClick={ this.switchDisplayingOfFiltersForm } >
                Advanced search
              </a>
            </div>
          </div>

          {
            shouldFiltersBeDisplayed ?
              this.getFiltersForm()
              :
              null
          }

        </div>
      </div>
    );
  }
}

SearchFilters.propTypes = {
  gender: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
  usState: PropTypes.string.isRequired,
};

export default SearchFilters;
