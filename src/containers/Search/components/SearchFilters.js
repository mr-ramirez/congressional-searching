import React, { Component } from 'react';

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

  getFiltersForm = () => {
    return (
      <div className="row">
        <div className="col-lg-12 text-right">

          <div className="row">
            <div className="col-md-4">

              <div className="form-group">
                <label className="filterText"
                  htmlFor="stateFilter">State</label>

                <select className="form-control filterText" id="stateFilter">
                  <option
                    value={ 'ALL' }
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

                <select className="form-control filterText" id="partyFilter">
                  <option
                    value={ 'ALL' }
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

                <select className="form-control filterText" id="genderFilter">
                  <option
                    value={ 'ALL' }
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
            <div className="col-lg-12">
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
              <a
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

export default SearchFilters;
