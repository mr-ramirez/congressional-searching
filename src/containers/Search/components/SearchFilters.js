import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SearchFilters.css';
import Chambers from '../../../data/static/chambers';
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

  handleChamberChange = (event) => {
    const {
      target: { value },
    } = event;

    const { congress, gender, pageSize, party, setFilters, usState } = this.props;

    setFilters({
      chamber: value,
      congress,
      gender,
      pageSize,
      party,
      usState,
    });
  }

  handleCongressChange = (event) => {
    const {
      target: { value },
    } = event;

    const { chamber, gender, pageSize, party, setFilters, usState } = this.props;

    setFilters({
      chamber,
      congress: Number(value),
      gender,
      pageSize,
      party,
      usState,
    });
  }

  handleGenderChange = (event) => {
    const {
      target: { value },
    } = event;

    const { chamber, congress, pageSize, party, setFilters, usState } = this.props;

    setFilters({
      chamber,
      congress,
      gender: value,
      pageSize,
      party,
      usState,
    });
  }

  handlePageSizeChange = (event) => {
    const {
      target: { value },
    } = event;

    const { chamber, congress, gender, party, setFilters, usState } = this.props;

    setFilters({
      chamber,
      congress,
      gender,
      pageSize: Number(value),
      party,
      usState,
    });
  }

  handlePartyChange = (event) => {
    const {
      target: { value },
    } = event;

    const { chamber, congress, gender, pageSize, setFilters, usState } = this.props;

    setFilters({
      chamber,
      congress,
      gender,
      pageSize,
      party: value,
      usState,
    });
  }

  handleStateChange = (event) => {
    const {
      target: { value },
    } = event;

    const { chamber, congress, pageSize, party, setFilters, gender } = this.props;

    setFilters({
      chamber,
      congress,
      gender,
      pageSize,
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

              <div className="form-group">
                <label className="filterText"
                  htmlFor="chamberFilter">Chamber</label>

                <select className="form-control filterText"
                  id="chamberFilter"
                  onChange={this.handleChamberChange} >
                  <option
                    value={ Chambers.HOUSE.name }>
                    { Chambers.HOUSE.name }
                  </option>

                  <option
                    value={ Chambers.SENATE.name }>
                    { Chambers.SENATE.name }
                  </option>
                </select>
              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="congressFilter">
                  Congressional session: 
                  <span className="text-warning congressSession"> {this.props.congress}</span>
                </label>

                {
                  this.props.chamber === Chambers.HOUSE.name ?
                    <input
                      type="range"
                      className="custom-range"
                      min={Chambers.HOUSE.minCongress}
                      max={Chambers.HOUSE.maxCongress}
                      step="1"
                      onChange={this.handleCongressChange}
                      id="congressFilter" />
                    :
                    <input
                      type="range"
                      className="custom-range"
                      min={Chambers.SENATE.minCongress}
                      max={Chambers.SENATE.maxCongress}
                      step="1"
                      onChange={this.handleCongressChange}
                      id="congressFilter" />
                }
              </div>

            </div>

            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="pageSizeFilter">Page size</label>

                <select className="form-control filterText"
                  id="pageSizeFilter"
                  onChange={this.handlePageSizeChange} >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

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
  chamber: PropTypes.string.isRequired,
  congress: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
  usState: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default SearchFilters;
