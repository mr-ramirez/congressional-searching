import {
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SearchResultsItem from './SearchResultsItem';

class SearchResults extends Component {
  getPaginationControls = () => {
    const {
      pageNumber,
      results,
      totalPages,
    } = this.props;

    return (
      results.length > 0 ?
        <div className="row my-2">
          <div className="col-lg-4 text-center">
          </div>

          <div className="col-lg-4 text-center">
            <div className="row">
              <div className="col-lg-4 text-left">
                <button
                  className="btn btn-info"
                  type="button"
                  id="previous"
                  disabled={ pageNumber === 1 }
                  onClick={this.props.previousPageAction} >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>

              <div className="col-lg-4 text-center">
                <h4>
                  { pageNumber } / { totalPages }
                </h4>
              </div>

              <div className="col-lg-4 text-right">
                <button
                  className="btn btn-info"
                  type="button"
                  id="previous"
                  disabled={ pageNumber === totalPages }
                  onClick={this.props.nextPageAction} >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center">
          </div>
        </div>
        :
        null
    );
  }
  render() {
    const {
      pageNumber,
      results,
    } = this.props;
    return (
      <div>
        { this.getPaginationControls() }

        <div className="row">
          <div className="col-lg-12">
            {
              results.length > 0 ?
                (results[pageNumber - 1].map((item, index) => (
                  <SearchResultsItem
                    key={`resultItem${index}`}
                    index={index}
                    member={item} />
                )))
                :
                null
            }
          </div>
        </div>

        { this.getPaginationControls() }
      </div>
    );
  }
}

SearchResults.propTypes = {
  nextPageAction: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  previousPageAction: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default SearchResults;
