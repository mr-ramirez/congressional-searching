import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchResults extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">

          {
            this.props.results.length > 0 ?
              (this.props.results[this.props.pageNumber].map((item, index) => (
                <div className="card mb-3" key={`resultItem${index}`}>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="true" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
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
