import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchResultsItem from './SearchResultsItem';

class SearchResults extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          {
            this.props.results.length > 0 ?
              (this.props.results[this.props.pageNumber].map((item, index) => (
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
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default SearchResults;
